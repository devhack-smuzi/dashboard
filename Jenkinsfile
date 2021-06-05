pipeline {
    agent any

    environment {
        PORT = 5000
        IMAGE_NAME = 'dashboard-image'
        CONT_NAME = 'dashboard-cont'
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
                sh 'docker run --name ${CONT_NAME} -d -p ${PORT}:80 ${IMAGE_NAME}'
            }
        }
    }
}