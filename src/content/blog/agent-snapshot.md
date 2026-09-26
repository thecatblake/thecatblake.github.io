---
title: "About Agent Snapshot - my project on ETHGlobal Hackathon"
date: 2026-09-13
draft: true
---

## First
I belive that ERC-8004 trustless agent will be essential component of the agentic economy in future. When I heared about ERC-8004, I tried to search some trustless agents available. I found a subgraph by agent0, and queried manually, found none reachable. There were too much dust. Then I created a python script to find out reachable agent. I found out some but it took some times and especially cumbersome for this simple purpose. The subgraph has a property active, but it says it's active at the point where the subgraph indexed and, in my experience, it doesn't reflect the current status of the agent. I thought there should be a easy way to query reachable agents at current time. 

That was the beginning of Agent Snapshot.

At first, the solution seemed straightforward. Query all agents from Agent0's subgraph, check their current status and endpoint, store the results in a database, and repeat the process hourly or daily. The crawler itself was easy to build. Claude Code could create most of it in a few minutes.

## Second problem
I also belive that decentalization and verifiability will be essential component of the agentic economy, because a agent's  log should be saved and verifiable in trustless way. The previous crawler was missing one important thing. It recorded the status on my database. To serve it as a infrastructure, it lacks the decentalized nature and also verifiablity. By the way, It would have high availability. Writing all the crawl resutls to blockchin is too heavy. Also third party cannot verify the file at crawled time was actually served by the domain. I started exploring how this could be solved and found solutions. For the first problem, we only need to record the merkle tree hash on chain. Leaf is the hash of a agent card. For the second problem, I found a magic, zktls. ZKTLS can prove that a byte is served from a domain at some time. It prefixed by zk because it has ability to conceal a part of the byte received.