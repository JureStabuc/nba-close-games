import pandas as pd
from pandas import DataFrame

data = pd.read_csv("all_games.csv")

calls = DataFrame(data, columns = ["review_decision", "disadvantaged_team", "committing_team"])

calls = calls.loc[calls["review_decision"].isin(["IC", "INC"])]

calls = calls.dropna()

ad_group = calls.groupby("disadvantaged_team")
dis_group = calls.groupby("committing_team")

calls_count = DataFrame({"advantage":ad_group.size(), "disadvantage": dis_group.size()}).reset_index()

for index, row in calls_count.iterrows():
    print(row["index"])
    print(DataFrame(row).T)
    count_row = DataFrame(row).T
    file = row["index"] + ".csv"
    print(file)
    count_row.to_csv("advantage/"+file, index = False)
