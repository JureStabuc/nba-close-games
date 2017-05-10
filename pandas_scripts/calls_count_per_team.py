import pandas as pd
from pandas import DataFrame
import numpy as np

data = pd.read_csv("all_games.csv")

calls_adv = DataFrame(data, columns = ["seconds_left", "review_decision", "disadvantaged_team"])

calls_dis = DataFrame(data, columns = ["seconds_left", "review_decision", "committing_team"])

calls_adv = calls_adv.loc[calls_adv["review_decision"].isin(["IC", "INC"])].dropna()

calls_dis = calls_dis.loc[calls_dis["review_decision"].isin(["IC", "INC"])].dropna()

calls_adv.seconds_left = calls_adv.seconds_left.astype(int)

calls_dis.seconds_left = calls_dis.seconds_left.astype(int)

calls_adv_group = calls_adv.groupby(["disadvantaged_team","seconds_left"])

calls_dis_group = calls_dis.groupby(["committing_team","seconds_left"])

calls_count_adv = DataFrame({"num_ic_inc": calls_adv_group.size()}).reset_index()

calls_count_dis = DataFrame({"num_ic_inc": calls_dis_group.size()}).reset_index()

calls_count_adv = calls_count_adv.drop(calls_count_adv[calls_count_adv.seconds_left > 120].index)

calls_count_dis = calls_count_dis.drop(calls_count_dis[calls_count_dis.seconds_left > 120].index)

calls_count_adv.ix[calls_count_adv.seconds_left < 5, 'seconds_left'] = 0
calls_count_adv.ix[(calls_count_adv.seconds_left >5) &( calls_count_adv.seconds_left < 10), 'seconds_left'] = 5
calls_count_adv.ix[(calls_count_adv.seconds_left >10) &( calls_count_adv.seconds_left < 15), 'seconds_left'] = 10
calls_count_adv.ix[(calls_count_adv.seconds_left >15) &( calls_count_adv.seconds_left < 20), 'seconds_left'] = 15
calls_count_adv.ix[(calls_count_adv.seconds_left >20) &( calls_count_adv.seconds_left < 25), 'seconds_left'] = 20
calls_count_adv.ix[(calls_count_adv.seconds_left >25) &( calls_count_adv.seconds_left < 30), 'seconds_left'] = 25
calls_count_adv.ix[(calls_count_adv.seconds_left >30) &( calls_count_adv.seconds_left < 35), 'seconds_left'] = 30
calls_count_adv.ix[(calls_count_adv.seconds_left >35) &( calls_count_adv.seconds_left < 40), 'seconds_left'] = 35
calls_count_adv.ix[(calls_count_adv.seconds_left >40) &( calls_count_adv.seconds_left < 45), 'seconds_left'] = 40
calls_count_adv.ix[(calls_count_adv.seconds_left >45) &( calls_count_adv.seconds_left < 50), 'seconds_left'] = 45
calls_count_adv.ix[(calls_count_adv.seconds_left >50) &( calls_count_adv.seconds_left < 55), 'seconds_left'] = 50
calls_count_adv.ix[(calls_count_adv.seconds_left >55) &( calls_count_adv.seconds_left < 60), 'seconds_left'] = 55
calls_count_adv.ix[(calls_count_adv.seconds_left >60) &( calls_count_adv.seconds_left < 65), 'seconds_left'] = 60
calls_count_adv.ix[(calls_count_adv.seconds_left >65) &( calls_count_adv.seconds_left < 70), 'seconds_left'] = 65
calls_count_adv.ix[(calls_count_adv.seconds_left >70) &( calls_count_adv.seconds_left < 75), 'seconds_left'] = 70
calls_count_adv.ix[(calls_count_adv.seconds_left >75) &( calls_count_adv.seconds_left < 80), 'seconds_left'] = 75
calls_count_adv.ix[(calls_count_adv.seconds_left >80) &( calls_count_adv.seconds_left < 85), 'seconds_left'] = 80
calls_count_adv.ix[(calls_count_adv.seconds_left >85) &( calls_count_adv.seconds_left < 90), 'seconds_left'] = 85
calls_count_adv.ix[(calls_count_adv.seconds_left >90) &( calls_count_adv.seconds_left < 95), 'seconds_left'] = 90
calls_count_adv.ix[(calls_count_adv.seconds_left >95) &( calls_count_adv.seconds_left < 100), 'seconds_left'] = 95
calls_count_adv.ix[(calls_count_adv.seconds_left >100) &( calls_count_adv.seconds_left < 105), 'seconds_left'] = 100
calls_count_adv.ix[(calls_count_adv.seconds_left >105) &( calls_count_adv.seconds_left < 110), 'seconds_left'] = 105
calls_count_adv.ix[(calls_count_adv.seconds_left >110) &( calls_count_adv.seconds_left < 115), 'seconds_left'] = 110
calls_count_adv.ix[(calls_count_adv.seconds_left >115) &( calls_count_adv.seconds_left < 120), 'seconds_left'] = 115

calls_count_dis.ix[calls_count_dis.seconds_left < 5, 'seconds_left'] = 0
calls_count_dis.ix[(calls_count_dis.seconds_left >5) &( calls_count_dis.seconds_left < 10), 'seconds_left'] = 5
calls_count_dis.ix[(calls_count_dis.seconds_left >10) &( calls_count_dis.seconds_left < 15), 'seconds_left'] = 10
calls_count_dis.ix[(calls_count_dis.seconds_left >15) &( calls_count_dis.seconds_left < 20), 'seconds_left'] = 15
calls_count_dis.ix[(calls_count_dis.seconds_left >20) &( calls_count_dis.seconds_left < 25), 'seconds_left'] = 20
calls_count_dis.ix[(calls_count_dis.seconds_left >25) &( calls_count_dis.seconds_left < 30), 'seconds_left'] = 25
calls_count_dis.ix[(calls_count_dis.seconds_left >30) &( calls_count_dis.seconds_left < 35), 'seconds_left'] = 30
calls_count_dis.ix[(calls_count_dis.seconds_left >35) &( calls_count_dis.seconds_left < 40), 'seconds_left'] = 35
calls_count_dis.ix[(calls_count_dis.seconds_left >40) &( calls_count_dis.seconds_left < 45), 'seconds_left'] = 40
calls_count_dis.ix[(calls_count_dis.seconds_left >45) &( calls_count_dis.seconds_left < 50), 'seconds_left'] = 45
calls_count_dis.ix[(calls_count_dis.seconds_left >50) &( calls_count_dis.seconds_left < 55), 'seconds_left'] = 50
calls_count_dis.ix[(calls_count_dis.seconds_left >55) &( calls_count_dis.seconds_left < 60), 'seconds_left'] = 55
calls_count_dis.ix[(calls_count_dis.seconds_left >60) &( calls_count_dis.seconds_left < 65), 'seconds_left'] = 60
calls_count_dis.ix[(calls_count_dis.seconds_left >65) &( calls_count_dis.seconds_left < 70), 'seconds_left'] = 65
calls_count_dis.ix[(calls_count_dis.seconds_left >70) &( calls_count_dis.seconds_left < 75), 'seconds_left'] = 70
calls_count_dis.ix[(calls_count_dis.seconds_left >75) &( calls_count_dis.seconds_left < 80), 'seconds_left'] = 75
calls_count_dis.ix[(calls_count_dis.seconds_left >80) &( calls_count_dis.seconds_left < 85), 'seconds_left'] = 80
calls_count_dis.ix[(calls_count_dis.seconds_left >85) &( calls_count_dis.seconds_left < 90), 'seconds_left'] = 85
calls_count_dis.ix[(calls_count_dis.seconds_left >90) &( calls_count_dis.seconds_left < 95), 'seconds_left'] = 90
calls_count_dis.ix[(calls_count_dis.seconds_left >95) &( calls_count_dis.seconds_left < 100), 'seconds_left'] = 95
calls_count_dis.ix[(calls_count_dis.seconds_left >100) &( calls_count_dis.seconds_left < 105), 'seconds_left'] = 100
calls_count_dis.ix[(calls_count_dis.seconds_left >105) &( calls_count_dis.seconds_left < 110), 'seconds_left'] = 105
calls_count_dis.ix[(calls_count_dis.seconds_left >110) &( calls_count_dis.seconds_left < 115), 'seconds_left'] = 110
calls_count_dis.ix[(calls_count_dis.seconds_left >115) &( calls_count_dis.seconds_left < 120), 'seconds_left'] = 115

group_adv = calls_count_adv.groupby(["disadvantaged_team","seconds_left"]).sum().reset_index()

group_dis = calls_count_dis.groupby(["committing_team","seconds_left"]).sum().reset_index()

idx = pd.MultiIndex.from_product([group_adv['disadvantaged_team'].unique(),
                                  np.arange(0, group_adv['seconds_left'].max()+1, 5)],
                                 names=['disadvantaged_team', 'seconds_left'])

group_adv = group_adv.set_index(['disadvantaged_team', 'seconds_left']).reindex(idx).reset_index().fillna(0)

idx = pd.MultiIndex.from_product([group_dis['committing_team'].unique(),
                                  np.arange(0, group_dis['seconds_left'].max()+1, 5)],
                                 names=['committing_team', 'seconds_left'])

group_dis = group_dis.set_index(['committing_team', 'seconds_left']).reindex(idx).reset_index().fillna(0)

group_adv.rename(columns={'disadvantaged_team': 'team', 'num_ic_inc': 'advantage'}, inplace=True)

group_dis.rename(columns={'committing_team': 'team', 'num_ic_inc': 'disadvantage'}, inplace=True)

cols_to_use = group_dis.columns.difference(group_adv.columns)

calls_all = pd.merge(group_adv, group_dis[cols_to_use], right_index=True, left_index=True)

calls_all.advantage = calls_all.advantage.astype(int)

calls_all.disadvantage = calls_all.disadvantage.astype(int)

for value in calls_all['team']:
    calls_all[calls_all['team'] == value].to_csv("calls/" + value + '.csv', index = False)
