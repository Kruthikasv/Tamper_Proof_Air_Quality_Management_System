# Tamper_Proof_Air_Quality_Management_System
One of the most important concerns facing urban regions across the world is air pollution. As a result, it's critical to monitor pollution levels and notify the public on the state of the air. An indicator called the Air Quality Index (AQI) does this by mapping the concentration of different contaminants into a single number. Because the examination of pollutant data is frequently opaque to outsiders, poor environmental control judgments may result. This has led to a need for a tamper-proof pollution management system for use by authorities, like the state and central pollution boards.  To address these challenges, this project implemented a solution leveraging machine learning algorithms and blockchain technology to predict and monitor air quality levels, addressing the transparency and reliability challenges in pollution management. Utilized Hyperledger Fabric, a private permissioned blockchain, ensuring tamper-proof records and transparency among trusted organizations. Solution includes three key node types: Certificate Authorities, Orderers, and Peers.


Steps to run the application: <br>
1)Start network <br>
2)Enroll admin user <br>
3)Register user <br>
4)Submit a transaction(put block) <br>
5)View the transaction(get block) <br>
6)Stop network <br>

Start network steps: In the tpaqms_frontend folder, open three terminal <br>
Terminal 1: <br>
$cd api <br>
$python3 main.py <br>
Terminal 2: <br>
            $cd shell <br>
            $node route.js <br>
Terminal 3: <br>
            $npm start <br>

Along with the following commands: <br>
node enrollAdmin.js <br>
node registerUser.js <br>



