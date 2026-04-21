node {
    docker.image('node:lts-alpine').inside {
        stage('Build') {
            echo 'Installing dependencies'
            sh 'npm install'
        }

        stage('Test') {
            echo 'Running tests'
            sh './jenkins/scripts/test.sh'
        }
        stage('Manual Approval') {
            echo 'Awaiting manual approval to proceed to Deploy'
            def userChoice = input message: 'Lanjutkan ke tahap Deploy?', parameters: [choice(name: 'ACTION', choices: 'Proceed\nAbort', description: 'Pilih opsi: Proceed untuk melanjutkan, Abort untuk membatalkan')]
            if (userChoice == 'Abort') {
                error 'Pipeline aborted by user at Manual Approval stage'
            }
        }
        stage('Deploy') {
            echo 'Deploying application'
            sh './jenkins/scripts/deliver.sh'
            echo 'Application deployed — keeping it running for 60 seconds before stopping automatically'
            sleep 60
            sh './jenkins/scripts/kill.sh'
        }
    }
}