@Library('locusview') _

pipeline {
    agent {
        label 'jenkins-slave-nortecviewlocal-01'
    }
//    triggers {
//        pollSCM 'H/2 * * * *'
//    }
    options {
        // Keep the 10 most recent builds
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    parameters {
//        string(name: 'ENDPOINT_OF_TEST', defaultValue: 'test1.nortecview.localhost')
        listGitBranches(
                branchFilter: '*',
                defaultValue: 'refs/heads/master',
                name: 'automation_branch',
                type: 'BRANCH',
                selectedValue: 'DEFAULT',
                remoteURL: 'https://github.com/locusview/locusweb-client-automation.git',
                credentialsId: '7f035f5b-a624-4890-8748-aa94bb0d8dda')

    }
    stages {
        stage("set build name") {
            steps {
                script {
                    currentBuild.displayName = "#${BUILD_NUMBER} nortecview/locusweb-automation:latest"
                    currentBuild.description = "#${BUILD_NUMBER} nortecview/locusweb-automation:latest"
                }
            }
        }
        stage('prepare configration') {
            steps {
                git(url: 'https://github.com/locusview/locusweb-client-automation.git', branch: "${params.automation_branch.split('refs/heads/')[1]}", credentialsId: '7f035f5b-a624-4890-8748-aa94bb0d8dda', changelog: true)
                sh label: 'override builder', script: "cp -f ./docker_overwrite/builder.js ./src/common/builder.js"

            }
        }
        stage('docker build') {
            steps {
                sh label: 'build local docker image', script: "docker build . -t nortecview/locusweb-automation:latest"
            }
        }
        stage('docker push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh label: 'DockerLogin', script: "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
                    sh label: 'push local docker image', script: "docker push nortecview/locusweb-automation:latest"
                }

            }
        }

        stage('cleanup') {
            steps {
                cleanWs()
                sh label: 'remove local docker image', script: "docker rmi nortecview/locusweb-automation:latest"

            }
        }
    }
    post {
        success {
            node('master') {
                script {
                    recipients = ''
                    channel = "jenkins_ci"
                    subject = "Build ${env.JOB_NAME}-${BUILD_ID} finished successfully!"
                    body = "Jenkins Job finished successfully! "
                    send_notification.message(
                            recipients,
                            channel,
                            subject,
                            body,
                            'green'
                    )
                }
            }
        }
        failure {
            node('master') {
                script {
                    //recipients = 'devops@controlup.com'
                    recipients = ''
                    channel = "jenkins_ci"
                    subject = "Build ${env.JOB_NAME}-${BUILD_ID} Failed!"
                    body = "Jenkins Job failed at ->${env.STAGE_NAME} "
                    send_notification.message(
                            recipients,
                            channel,
                            subject,
                            body,
                            'red'
                    )
                }
                cleanWs()

            }
        }
        aborted {
            node('master') {
                script {
                    //recipients = 'devops@controlup.com'
                    recipients = ''
                    channel = "jenkins_ci"
                    subject = "Build ${env.JOB_NAME}-${BUILD_ID} Aborted!"
                    body = "Jenkins Job Aborted!"
                    send_notification.message(
                            recipients,
                            channel,
                            subject,
                            body,
                            'grey'
                    )
                }
            }
        }

    }

}
