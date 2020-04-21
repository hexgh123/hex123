am4core.ready(function () {
    var myJSON = [
        {
            "IP_Number": "16909059",
            "IP_Version": 4,
            "IP_Address": "1.2.3.3",
            "Country_Code": "AU",
            "Country_Name": "Australia",
            "Region_Name": "Queensland",
            "City_Name": "Brisbane"
        },
        {
            "IP_Number": "33907478",
            "IP_Version": 4,
            "IP_Address": "2.5.99.22",
            "Country_Code": "FR",
            "Country_Name": "France",
            "Region_Name": "Hauts-de-France",
            "City_Name": "Lille"
        },
        {
            "IP_Number": "553784885",
            "IP_Version": 4,
            "IP_Address": "33.2.22.53",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Ohio",
            "City_Name": "Columbus"
        },
        {
            "IP_Number": "721947651",
            "IP_Version": 4,
            "IP_Address": "43.8.12.3",
            "Country_Code": "JP",
            "Country_Name": "Japan",
            "Region_Name": "Tokyo",
            "City_Name": "Tokyo"
        },
        {
            "IP_Number": "891958082",
            "IP_Version": 4,
            "IP_Address": "53.42.51.66",
            "Country_Code": "DE",
            "Country_Name": "Germany",
            "Region_Name": "Baden-Wurttemberg",
            "City_Name": "Stuttgart"
        },
        {
            "IP_Number": "1075186180",
            "IP_Version": 4,
            "IP_Address": "64.22.10.4",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Tennessee",
            "City_Name": "Jackson"
        },
        {
            "IP_Number": "1220359772",
            "IP_Version": 4,
            "IP_Address": "72.189.54.92",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Florida",
            "City_Name": "Kissimmee"
        },
        {
            "IP_Number": "1488795228",
            "IP_Version": 4,
            "IP_Address": "42.189.35.197",
            "Country_Code": "MY",
            "Country_Name": "Malaysia",
            "Region_Name": "Kedah",
            "City_Name": "Alor Setar"
        },
        {
            "IP_Number": "1539113227",
            "IP_Version": 4,
            "IP_Address": "91.189.1.11",
            "Country_Code": "PL",
            "Country_Name": "Poland",
            "Region_Name": "Lodzkie",
            "City_Name": "Lodz"
        },
        {
            "IP_Number": "190415715",
            "IP_Version": 4,
            "IP_Address": "11.89.131.99",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Ohio",
            "City_Name": "Columbus"
        },
        {
            "IP_Number": "141971464",
            "IP_Version": 4,
            "IP_Address": "8.118.80.8",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Louisiana",
            "City_Name": "Monroe"
        },
        {
            "IP_Number": "2013795592",
            "IP_Version": 4,
            "IP_Address": "120.8.21.8",
            "Country_Code": "CN",
            "Country_Name": "China",
            "Region_Name": "Hebei",
            "City_Name": "Handan"
        },
        {
            "IP_Number": "1359742989",
            "IP_Version": 4,
            "IP_Address": "81.12.8.13",
            "Country_Code": "IR",
            "Country_Name": "Iran (Islamic Republic of)",
            "Region_Name": "Tehran",
            "City_Name": "Tehran"
        },
        {
            "IP_Number": "101191171",
            "IP_Version": 4,
            "IP_Address": "42.189.33.197",
            "Country_Code": "MY",
            "Country_Name": "Malaysia",
            "Region_Name": "Kedah",
            "City_Name": "Sungai Petani"
        },
        {
            "IP_Number": "386862914",
            "IP_Version": 4,
            "IP_Address": "23.15.15.66",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Georgia",
            "City_Name": "Atlanta"
        },
        {
            "IP_Number": "269879812",
            "IP_Version": 4,
            "IP_Address": "16.22.10.4",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "California",
            "City_Name": "Palo Alto"
        },
        {
            "IP_Number": "297612892",
            "IP_Version": 4,
            "IP_Address": "17.189.54.92",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "California",
            "City_Name": "Cupertino"
        },
        {
            "IP_Number": "314390108",
            "IP_Version": 4,
            "IP_Address": "18.189.54.92",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Ohio",
            "City_Name": "Columbus"
        },
       
        {
            "IP_Number": "347938908",
            "IP_Version": 4,
            "IP_Address": "20.189.32.92",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Texas",
            "City_Name": "San Antonio"
        },
        {
            "IP_Number": "331153675",
            "IP_Version": 4,
            "IP_Address": "19.189.1.11",
            "Country_Code": "US",
            "Country_Name": "United States of America",
            "Region_Name": "Michigan",
            "City_Name": "Dearborn"
        }];

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var continents = {
        "AF": 0,
        "AN": 1,
        "AS": 2,
        "EU": 3,
        "NA": 4,
        "OC": 5,
        "SA": 6
    }

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series for world map
    var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.useGeodata = true;
    worldSeries.geodata = am4geodata_worldLow;
    worldSeries.exclude = ["AQ"];

    var worldPolygon = worldSeries.mapPolygons.template;
    worldPolygon.tooltipText = "{name}";
    worldPolygon.nonScalingStroke = true;
    worldPolygon.strokeOpacity = 0.5;
    worldPolygon.fill = am4core.color("#eee");
    worldPolygon.propertyFields.fill = "color";

    // Create country specific series (but hide it for now)
    var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
    countrySeries.useGeodata = true;
    countrySeries.hide();
    countrySeries.geodataSource.events.on("done", function (ev) {
        worldSeries.hide();
        countrySeries.show();
    });

    var countryPolygon = countrySeries.mapPolygons.template;
    countryPolygon.tooltipText = "{name}";
    countryPolygon.nonScalingStroke = true;
    countryPolygon.strokeOpacity = 0.5;
    countryPolygon.fill = am4core.color("#eee");

    var hs = countryPolygon.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(9);

    // Set up click events
    worldPolygon.events.on("hit", function (ev) {
        ev.target.series.chart.zoomToMapObject(ev.target);
        var map = ev.target.dataItem.dataContext.map;
        var mapID = ev.target.dataItem.dataContext.id;
        if (map) {
            ev.target.isHover = false;
            countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
            countrySeries.geodataSource.load();
        }
    });

    // Set up data for countries
    var data = [];
    for (var id in am4geodata_data_countries2) {
        if (am4geodata_data_countries2.hasOwnProperty(id)) {
            var country = am4geodata_data_countries2[id];
            for (var i in myJSON) {
                if (id == myJSON[i].Country_Code) {
                    data.push({
                        id: id,
                        color: chart.colors.getIndex(continents[country.continent_code]),
                        map: country.maps[0]
                    });
                }
            }
        }
    }
    worldSeries.data = data;

    // Zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    var homeButton = new am4core.Button();
    homeButton.events.on("hit", function () {
        worldSeries.show();
        countrySeries.hide();
        chart.goHome();
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 30;
    homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
    homeButton.marginBottom = 10;
    homeButton.parent = chart.zoomControl;
    homeButton.insertBefore(chart.zoomControl.plusButton);

}); // end am4core.ready()