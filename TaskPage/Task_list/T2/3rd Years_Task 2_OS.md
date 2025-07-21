# OPEN SOURCE
## 2nd Years 
### Authors: Mahitha, Swetha, Hasini
---
### TASK: 

You are a data analyst at SpyTrack, a top-secret intelligence agency that tracks agents, missions, and communications across international operations. A mole is suspected inside the network, and you’ve been given access to a classified database to investigate anomalies, trace suspicious behaviour, and clean up inactive or orphan records. 

![](Aspose.Words.380ed95d-ec7c-4905-aab6-f4a4a674701b.001.jpeg)

![](Aspose.Words.380ed95d-ec7c-4905-aab6-f4a4a674701b.002.jpeg)

1. Hidden Pings: Detect agents who sent communications after being marked as 'Dead', or who sent messages before their profile was created in the Agents table. These may indicate ghost activity or backdoor communications. Return the agent's name, the message, and the timestamp.  
1. Mole Triangle: Identify suspected moles—agents who have (a) failed more than two missions in a row, (b) frequently communicate with agents from other countries, and (c) have no alerts associated with them. Return a list of agents who meet all these conditions.  
1. The Silent Network: Find agents who are still marked as 'Active', but have (a) not sent or received messages in the last 90 days, and (b) not gone on any missions in the past 6 months. Include their name, country, and last known mission date, if any.  
1. Suspicion Score Ranking: Assign a suspicion score to each agent using this formula:  +10 points for every failed mission, 

+5 points for each message sent to a different country, 

-3 points for every alert raised against them. 

List the top 5 agents with the highest total scores, ordered from most to least suspicious.  

1\.  Unlinked Agents: Identify all agents who have no missions, no communications (neither sent nor received), and no alerts. These entries may be inactive or mistakenly retained in the system and should be reviewed or removed  
