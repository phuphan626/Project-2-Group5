
=======
# Project-2-Group5
Baseball Analysis
# Team Member:
* John Shows
* Marvin Gayle
* Phu Phan
* Tyler Stridiron
# Project topic:
Our team has passion in sports - especially in baseball. We are curious to see how the performance had changed when analysis was applied into sports. Therefore, we want to compare the stats for current years and the past (up to 30 years if data is available).
# Data Source:
## Baseball-Reference.com: MLB Stats, Scores, History, & Records:
* https://www.baseball-reference.com/leagues/MLB/pitch.shtml
* https://www.baseball-reference.com/leagues/MLB/bat.shtml
# New JavaScript:
We found that Chart.js has some cool features, and cool graphs: such as interactive graphs, legends and colorful visualizations. We picked this as our new library.
We also used the D3.js to read the json files into the html.
# Visualization ideas:
We want to use visualization to sketch out the changes over a century from 1920 to 2020, when technology was applied to sports - especially in baseball. We do our graphs on two sections : pitching and batting. 
# Workflow process:
* Firstly, we used the QuickDBD to sketch out the diagram for our database in postgreSQL. We named it 'project2-db', then we run the 'SQL-table-query.sql' to create two tables: pitching_averages and batting_stats.
* Then we used jupyter notebook to scrape the tables from the links above. In this notebook, we do our cleanup for the tables, from renaming columns, dropping columns and converting the values type to correct type.
* We extracted the tables as json files, we also created the connection between the notebook and database. We loaded the data to database, so that in Flask it can query out the data.
* We used the dashboard templates from "https://www.creative-tim.com/product/light-bootstrap-dashboard#" (we want to give him credits for this).
* Finally, we built our html files and javascript files to populate the graphs.
* Note: please create a config.py file in your local repository, and in that create a "my_key" variable to hold your postgreSQL password.
# Consideration:
Since the advent of the scorecard in the 1870’s the game of baseball has forever been tied to statistics. Keeping score was a way for fans and enthusiasts to relive the game by paying attention to each and every event on the field. As technology progressed and stats were posted on the jumbotron for the entire ballpark to see, manual score-keeping gradually lost popularity, but the marriage between statistics and baseball was solidified forever. 
Analysis of baseball statistics has been performed by team owners, managers and fans since the 1940’s to gain an edge on the competition. With the rise of “Sabermetrics” in the early 2000’s and the Oakland A’s historic season, the collection and analysis of baseball statistics took on a whole new meaning: smaller, underfunded teams could take on the established powerhouses by the careful and nuanced application of empirical analysis. Fast forward to 2020 and every single team has a robust analytics department that plays a major role in the teams overall strategy, as well as day to day game planning. 
In this project, we want to analyze the change in a few key metrics on the batting and pitching sides and visualize these changes over time. We also want to analyze the stats before and after Sabermetrics became widely popular to show any significant changes that empirical analysis has had on the way baseball is played (maybe). We also (potentially) want to show how the overall performance of the top players in the league by stat category have changed over the years. To do this, we are planning on using Selenium to web scrape Baseball-Reference’s historical data for the specific Sabermetric categories. 
Once this data is retrieved, we will (potentially) load it into a relational database (PostgreSQL) to perform additional analysis. We will then use this nice clean dataset to populate our JS visualizations using Flask and D3.js. Our end goal is to have (multiple or single) graphs with user interactivity that can show how the game of baseball has changed over the years from a statistical standpoint, how Sabermetrics has influenced the way the game is changed, and how the stats of the top performance in baseball has changed. There are a million reasons why total home runs have skyrocketed over the past decade, but we will try to address why these changes have taken place.

>>>>>>> master
