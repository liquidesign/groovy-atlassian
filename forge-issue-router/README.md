# Forge App - Setup and Configuration

## Prerequisites
- Node.js >= 14.x
- npm/yarn
- Forge CLI installed
- Atlassian account

## Setup Instructions
1. **Install the Forge CLI**  
   Run the following command to install the Forge CLI:  
   ```bash
   npm install -g @forge/cli
   ```

2. **Create a New Forge App**  
   Use the Forge CLI to create a new app:  
   ```bash
   forge create
   ```
   Choose the appropriate template as per your requirement.

3. **Configure Your App**  
   - Navigate to your app directory:  
     ```bash
     cd your-app-directory
     ```  
   - Update the `manifest.yml` file with the necessary configuration details.
   - Set environment variables if required.

4. **Deploy Your App**  
   ```bash
   forge deploy
   ```

5. **Install the App on Atlassian Product**  
   After deployment, install your app on an Atlassian product by following the prompts in the Forge dashboard.

## Configuration Instructions
- Ensure your app has the necessary permissions defined in `manifest.yml`.
- Configure webhooks as needed through the Atlassian product settings.

For additional information, refer to the [Atlassian Forge documentation](https://developer.atlassian.com/platform/forge/).