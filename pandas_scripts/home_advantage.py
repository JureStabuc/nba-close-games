import pandas as pd
from pandas import DataFrame

data = pd.read_csv("all_games.csv")

calls = pd.DataFrame(data, columns = ["home", "review_decision", "disadvantaged_team", "committing_team"])

calls = calls.loc[calls["review_decision"].isin(["IC", "INC"])]

calls = calls.dropna()

calls["advantage"] = ""
calls["disadvantage"] = ""

for index, row in calls.iterrows():
    if row["disadvantaged_team"] == row["home"]:
        calls.loc[index,'disadvantage'] = 0
        calls.loc[index,'advantage'] = 1

    else:
        calls.loc[index,'disadvantage'] = 1
        calls.loc[index,'advantage'] = 0

home_count = calls.groupby("home").sum().reset_index()

home_count = home_count.drop(home_count.columns[[1]], axis=1)

home_count = home_count.drop(home_count.columns[[1, 2]], axis=1)

for index, row in home_count.iterrows():
    print(row["home"])
    print(DataFrame(row).T)
    count_row = DataFrame(row).T
    file = row["home"] + ".csv"
    print(file)
    count_row.to_csv("advantage_home/"+file, index = False)
