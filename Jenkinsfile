pipeline {
    agent any

    environment {
        IMAGE_NAME = 'dashboard-image'
        CONT_NAME = 'dashboard'
        NETWORK = "smuzi"
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}  .'
            }
        }
        stage('Run') {
            steps {
                sh 'docker rm -f ${CONT_NAME}' 
                sh 'docker run --name ${CONT_NAME} --net ${NETWORK} -d ${IMAGE_NAME}'
            }
        }
    }
}