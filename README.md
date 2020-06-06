General Notes:
    The goal of this project is not only to practice building a small web application utilizing an outside API but also to explore different stylings that may be available.  Because the goal is to make something that isn't requiring additional cost, some of this project will display some limitations (such as weather apis that doesn't handle forecasting and historical infor).  
    The GOAL is to practice in pulling information and displaying in a clean, comfortable way.

    Desired Goals:
        - Deployment to AWS
        - Using multiple outside APIs that are both HTTPS and require an API Access Key.
            - May look into OAuth as another goal measure depending on how this project develops.
        - Track progression via README file per date status records.
        - Find another UX/UI template build (like bootstrap) to practice with.
            - Found https://materializecss.com/ and I'm very interested in playing around with this more.
        - Update personal portfolio.
        - End of Project details of what was learned and what could have been done better.

    APIs Utilized:
        1) https://weatherstack.com (free versioning)
        2) https://developers.teleport.org/ (considering)
        3) https://ip-api.com/ (IP Address Location) (no API Key Req.)

    Other Tools Utilized:
        1) https://materializecss.com/

    QUICK NOTES
        - gitignore created to protect personal access keys.  In order to allow for these projects to work, a separate JS file was created to pull these keys from within the HTML.  

****
    TO DO:
        - Find additional APIs to inject.  
            - Teleport - Quality of Life
            - A quick Joke API ? 
        - Start displaying fetched APIs on DOM.
****
Status Notes:
2020
6/5
    - Weatherstack free versioning doesn't provide https.  Only available for standard plan (or higher).
        - Got my fetch to work correctly and set the values to various points of interest that I will want to display.

6/6
    - Got link to ip-api to fetch properly.
    - Did a quick layout utilizing martializecss.com.
        - Focus on Mobile First.
        - May utilize a different card to display different information (such as a tabbed card)

