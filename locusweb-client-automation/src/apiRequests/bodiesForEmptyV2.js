
const policyConfiguratorBody = {
    "id": null,
    "name": "Configurator",
    "permissions": {
        "app:configuration": {
            "actions": [
                "access"
            ]
        },
        "app:user_management": {
            "actions": [
                "access"
            ]
        }
    },
    "readonly": false,
    "restricted": false
}

const policyMobileBody = {
    "id": null,
    "name": "Mobile",
    "permissions": {
        "app:mobile": {
            "actions": [
                "access"
            ]
        },
        "config:form_type:*": {
            "actions": [
                "full_edit:in_progress"
            ]
        },
        "config:work_unit:*": {
            "actions": [
                "full_edit:in_progress",
                "mappable:in_progress"
            ]
        },
        "config:asset_type:*": {
            "actions": [
                "full_edit:in_progress",
                "mappable:in_progress"
            ]
        },
        "config:joint_type:*": {
            "actions": [
                "full_edit:in_progress"
            ]
        },
        "config:project_type:*": {
            "actions": [
                "full_edit:draft",
                "transition:in_progress",
                "transition:submitted",
                "full_edit:in_progress"
            ]
        }
    },
    "readonly": false,
    "restricted": false
}

const policyViewerBody = {
    "id": null,
    "name": "Viewer",
    "permissions": {
        "app:review_and_approve": {
            "actions": [
                "access"
            ]
        }
    },
    "readonly": false,
    "restricted": false
}

const policyApproverBody = {
    "id": null,
    "name": "Approver",
    "permissions": {
        "config:project_type:*": {
            "actions": [
                "transition:approved",
                "transition:in_review",
                "transition:rejected"
            ]
        },
        "app:review_and_approve": {
            "actions": [
                "access"
            ]
        },
        "config:workflow_step_type:*": {
            "actions": [
                "full_edit:in_review"
            ]
        }
    },
    "readonly": false,
    "restricted": false
}

const policyEditorBody = {
    "id": null,
    "name": "Editor",
    "permissions": {
        "config:form_type:*": {
            "actions": [
                "full_edit:in_review"
            ]
        },
        "config:work_unit:*": {
            "actions": [
                "full_edit:in_review",
                "mappable:in_review"
            ]
        },
        "config:asset_type:*": {
            "actions": [
                "full_edit:in_review",
                "mappable:in_review"
            ]
        },
        "config:project_type:*": {
            "actions": [
                "full_edit:in_review",
                "transition:approved",
                "transition:in_review",
                "transition:rejected"
            ]
        },
        "app:review_and_approve": {
            "actions": [
                "access"
            ]
        },
        "config:workflow_step_type:*": {
            "actions": [
                "full_edit:in_review"
            ]
        }
    },
    "readonly": false,
    "restricted": false
}

policyName = ["Configurator", "Mobile", "Viewer", "Approver", "Editor"]
policyPermissions = [

]

const policyGenericBody = (policyName, permissions) => ({
    "id": null,
    "name": policyName,
    "permissions": {permissions},
    "readonly": false,
    "restricted": false
})





const allUsers = 
    
[
        {
            "username": "test1",
            "email": "test@test.com",
            "status": "ACTIVE",
            "policies": [2],
            "federationType": "LV",
            "firstName": "",
            "lastName": ""
        },
        {
            "username": "TestV",
            "firstName": "Bob ",
            "lastName": "Marley",
            "email": "justanemail@some.com",
            "additionalInfo": "no woman no cry",
            "status": "ACTIVE",
            "policies": [5],
            "federationType": "LV",
            "notificationsSettings": [
                {
                    "notificationType": "EMAIL",
                    "enabled": false,
                    "verificationStatus": "NOT_VERIFIED",
                    "verificationDate": null
                }
            ]
        },
        {
            "username": "TestC",
            "firstName": "John ",
            "lastName": "Lennon",
            "email": "anothermail@some.com",
            "additionalInfo": "we are living in a yellow submarine",
            "phoneNumber": "+972541234567",
            "status": "ACTIVE",
            "federationType": "LV",
            "policies": [3],
            "notificationsSettings": [
                {
                    "notificationType": "EMAIL",
                    "enabled": false,
                    "verificationStatus": "NOT_VERIFIED",
                    "verificationDate": null
                }
            ]
        },
        {
            "username": "TestM",
            "firstName": "Ray",
            "lastName": "Charles",
            "email": "nomailbox@some.com",
            "additionalInfo": "Hit the road Jack and don't you come back no more, no more, no more, no more",
            "status": "ACTIVE",
            "policies": [4],
            "federationType": "LV",
            "notificationsSettings": [
                {
                    "notificationType": "EMAIL",
                    "enabled": false,
                    "verificationStatus": "NOT_VERIFIED",
                    "verificationDate": null
                }
            ]
        },
        {
            "username": "TestA",
            "firstName": "Leonard",
            "lastName": "Cohen",
            "additionalInfo": "A million candles burning for the help that never came\nYou want it darker",
            "phoneNumber": "+972537654321",
            "federationType": "LV",
            "status": "ACTIVE",
            "policies": [6] 
        },
        {
            "username": "TestE",
            "firstName": "Nick",
            "lastName": "Cave",
            "additionalInfo": "She says, where can my loverman be? Well, I'm down here, babe, with the Eskimos, with the polar bears and the Arctic snow, with a party of penguins who do not know how I can get back to thee",
            "status": "ACTIVE",
            "federationType": "LV",
            "policies": [7]  
        },
        {
            "username": "superAdmin",
            "status": "ACTIVE",
            "policies": [1],
            "federationType": "LV"
        }
] 


module.exports = {policyConfiguratorBody, policyMobileBody, policyViewerBody, policyApproverBody, policyEditorBody
    
  }
