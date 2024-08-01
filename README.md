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

# Tamper-Proof Air Quality Management System More Detailed Documentation

## Features

- **Real-Time Air Quality Monitoring**: View live data from air quality sensors.
- **Historical Data Analysis**: Access and analyze historical air quality data.
- **Blockchain Integration**: Use Hyperledger Fabric to secure data and prevent tampering.
- **User-Friendly Interface**: Navigate and interact with the system through an intuitive web interface.

## Technologies Used

- **Frontend**: React (JavaScript library)
- **Backend**: Node.js, Express.js
- **Blockchain**: Hyperledger Fabric
- **Database**: MongoDB
- **Data Analysis**: Python, Jupyter Notebooks
- **Containerization**: Docker

## Folder Structure and Key Files

### Root Directory

- **`README.md`**: Main documentation file with an overview and instructions.
- **`TPAQMS_REPORT.pdf`**: Detailed project report in PDF format.
- **`docker-compose.yaml`**: Docker Compose file for setting up the development environment with Hyperledger Fabric.
- **`config.json`**: Configuration file for Hyperledger Fabric settings.
- **`package-lock.json`**: Automatically generated file that contains the exact version of every package installed.

### Blockchain Configuration

- **`enrollAdmin.js`**: Script for enrolling the admin user in the Hyperledger Fabric network.
- **`registerUser.js`**: Script for registering new users in the Hyperledger Fabric network.
- **`invoke.js`**: Script for invoking transactions on the Hyperledger Fabric blockchain.
- **`query.js`**: Script for querying data from the Hyperledger Fabric blockchain.
- **`fablo/`**: Directory containing configurations for Hyperledger Fabric.
  - **`fablo-config.json`**: Configuration file for setting up the Hyperledger Fabric network.
- **`test-network.json`**: Configuration file for testing the Hyperledger Fabric network.

### Frontend and Backend Integration

- **`index.js`**: Main entry point for the backend server. Sets up the Express application and connects to the blockchain network.

### Data Analysis and Models

- **`Final-dataset.csv`**: Final dataset used for analysis.
- **`Final-dataset1.csv`**: Additional dataset for analysis.
- **`India_Air_Quality_Project.ipynb`**: Jupyter Notebook for air quality data analysis specific to India.
- **`FinalModel.ipynb`**: Jupyter Notebook for the final model training and evaluation.

### Miscellaneous

- **`output.json`**: JSON file containing output data from scripts or models.

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB
- Hyperledger Fabric
- Docker

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Kruthikasv/Tamper_Proof_Air_Quality_Management_System.git
   ```

2. **Set Up Blockchain**
   - Follow the Hyperledger Fabric documentation to set up and configure the network.
   - Use the Docker Compose file to deploy the blockchain network.
     ```bash
     docker-compose -f docker-compose.yaml up
     ```

3. **Set Up Backend**
   - Navigate to the root directory and install dependencies.
     ```bash
     cd Tamper_Proof_Air_Quality_Management_System
     npm install
     ```
   - Configure environment variables and settings in `config.json`.

4. **Run the Backend Server**
   - Start the backend server.
     ```bash
     node index.js
     ```

5. **Run Data Analysis Notebooks**
   - Open the Jupyter Notebooks (`India_Air_Quality_Project.ipynb` and `FinalModel.ipynb`) in a Jupyter environment to perform data analysis and model training.

6. **Access the Application**
   - The application’s web interface should be accessible through the configured server.

## Usage

### Real-Time Monitoring

- **Dashboard**: View live data from air quality sensors and visualize trends.

### Historical Data Analysis

- **Historical Data Analysis**: Access and review past air quality data through data analysis notebooks.
- **Generate Reports**: Create and export detailed reports.

### Blockchain Integration

- **Data Integrity**: Verify the authenticity of data using blockchain records.
- **Prevent Tampering**: Ensure data security through blockchain technology.

## Contributions

Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any inquiries or support, please contact:

- **Name**: Kruthika Vasisht
- **Email**: kruthikasvasisht@gmail.com

