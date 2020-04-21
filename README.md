# hex123
How to display the geolocation results on amChart map

In this article, we will demonstrate how to map the countries using the IP2Location geolocation database based on IP addresses.

In this example, we will pre-define a set of IP-countries information for the map highlighting. Please note that in reality, this 
information should be retrieved from a source, such as database, real-time web data, user input and so on.

For example,

   var myJSON = [
   
        {
            "IP_Number": "16909059",
            "IP_Version": 4,
            "IP_Address": "1.2.3.3",
            "Country_Code": "AU",
            "Country_Name": "Australia",
            "Region_Name": "Queensland",
            "City_Name": "Brisbane"
        }]

Next, create a new project and insert the below codes:

i) Add a function to display the highlight of the countries that is 
   returned by the IP2Location IP lookup into the JavaScript code(countryHighlightJS.js)
   
ii) Add the amCharts resources link, style for the map and the division ‘chartdiv’ (worldMap.html)

After all the steps are completed, you will be able to see the highlighted countries. If you click on the highlighted country, 
you will be able to view more details.
