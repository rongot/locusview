### Local run
    for tests VS application running localy
    1. checkout https://github.com/locusview/locusweb-client - Connect to preview 
    2. open workspace --> select branch name you want to test
    3. npm run prepare (to initialize all the sub modules) 
    4. npm i
    5. create local-settings.js file (from local=settings.template.js) with your environment
    6. npm run loc (= ng serve with local dev settings)
    7. navigate to http://localhost:4000/app/
    8. open Automation Project --> in package.json add to the related script parameter LOCAL_RUN=true
    
    Example:
    ```
     "test_login": "cross-env LOCAL_RUN=true BASE_URL='webautomationci' node ./node_modules/mocha/bin/mocha  --timeout=40000 ./build/tests/v2_test_sets/login.test.js > report.log 2>&1"
    ``` 

### cloning localization files
    1. In order to update localization files run the scripts "cloneLocalization" and "copyTranslation" from package.json
    2. "cloneLocalization" clone only i18n folder from https://github.com/locusview/locusweb-client repository
    3. "copyTranslation" copy the localization files
    4. If localization files have changes after script run please commit them

### Staging environments
    per daily local use: auto1stg - Meerkats, auto2stg -Nuggets, auto3stg -Truffles, auto4stg - Tutim , lab4stg -Redhawk (edited) 
    per nightly mobile - auto1stg, webv2 - auto2stg, webv3 -auto3stg