export default [
{
    "docker-preprod.intuit.com/personal/spr01/oicp/standard/java/amzn-corretto-jdk17": {
        "2.2.2": {
            "Name": "docker-preprod.intuit.com/personal/spr01/oicp/standard/java/amzn-corretto-jdk17",
            "Tag": "2.2.2",
            "Created": "2022-11-14T19:27:26.859029+05:30",
            "Labels": {
                "HOME_URL": "https://amazonlinux.com/",
                "PRETTY_NAME": "Amazon Linux 2",
                "base.build_date": "2022-11-14T11:15:11Z",
                "base.description": "Intuit Amazon Linux 2 Base Image",
                "base.maintainer": "TechArtifactSupport@intuit.com",
                "com.intuit.amzn-corretto-jdk17_semantic_version": "2.2.2",
                "com.intuit.amzn_baseline_image_semantic_version": "1.1.39",
                "com.intuit.appd_java_agent_version": "22.10.0.34344",
                "com.intuit.base.amzn_version": "2",
                "com.intuit.base.intuit_version": "1.1.39",
                "com.intuit.contrast_java_agent_version": "4.0.0",
                "com.intuit.corretto_version": "17.0.5.8",
                "com.intuit.demo_version": "1.7.2",
                "com.intuit.jacoco_java_agent_version": "0.8.8",
                "com.intuit.stash_version": "3.96.0",
                "description": "This image can be used as a base image for other applications based on Java. The Corretto image can be extended using the CPD utility.",
                "image_file": "amzn2-container-raw-2.0.20221004.0-x86_64",
                "intuit_ap_sw": "corretto",
                "intuit_ap_sw_version": "17.0.5.8",
                "io.buildah.version": "1.28.0",
                "lineage": "[\n   {\n      \"ASSET_URL\": \"N/A\",\n      \"CHECKMARX_SCAN_RISK_SEVERITY\": \"\",\n      \"CHECKMARX_SCAN_LINK\": \"\",\n      \"CPD_GIT_HASH\": \"6dfed1a650be78f4dbb3c7746da607d5fa5c7f27\",\n      \"CPD_MAJOR_VERSION\": \"N/A\",\n      \"CPD_VERSION\": \"2.0.1\",\n      \"DOCKERFILE_LINK\": \"https://ffd7ce72995ed3b0070b76f2c72ecd173005300a%40github.intuit.com/dev-patterns/ap_corretto_container/blob/master/Dockerfile\",\n      \"EXCEPTION_CVE_LIST\": \"N/A\",\n      \"FROM\": \"docker.intuit.com/oicp/standard/base/amzn:1.1.39\",\n      \"FROM_IMAGE_DIGEST\": [\n         \"docker.intuit.com/oicp/standard/base/amzn@sha256:4e096f4d10529bea1d70ea8c678927363932cdd07a2d883c05b931727ac22df3\"\n      ],\n      \"GIT_COMMIT_HASH\": \"ce6b1ccdf1b08a0c36f6cd5b2461c101dc6f5413\",\n      \"GITHUB_BRANCH\": \"master\",\n      \"GITHUB_COMMIT_AUTHOR\": \"aramsamy arasu_ramasamy@intuit.com\",\n      \"GITHUB_COMMIT_TIME\": \"2022-11-14T13:40:02Z\",\n      \"GITHUB_LINK\": \"https://ffd7ce72995ed3b0070b76f2c72ecd173005300a%40github.intuit.com/dev-patterns/ap_corretto_container\",\n      \"IQSERVER_HIGHEST_THREAT_LEVEL\": \"\",\n      \"IQSERVER_POLICY_VIOLATIONS\": null,\n      \"IQSERVER_SCAN_LINK\": \"\",\n      \"JIRA_ISSUE\": \"N/A\",\n      \"JIRA_PROJECT\": \"Unknown\",\n      \"MAINTAINER\": \"idevp-patterns-team@intuit.com\",\n      \"UNAUTHORIZED_SOURCE_IMAGES\": [\n         \"N/A\"\n      ]\n   }\n]",
                "maintainer": "idevp-patterns-team@intuit.com",
                "recipe_id": "a0f48d18-a028-7835-5f63-be90-6cae-a6a7-d1bef075",
                "summary": "Build a Docker image containing Corretto, which is Amazon's implementation of OpenJDK.",
                "vcs_url": "https://github.intuit.com/dev-patterns/ap_corretto.git"
            },
            "Architecture": "amd64",
            "Variant": "",
            "Os": "linux",
            "Env": [
                "USER_HOME=/home/appuser",
                "COMMENTS=Intuit Application User",
                "USERNAME=appuser",
                "USER_UID=1000",
                "PACKAGES=        sudo         tar         openssl         shadow-utils         ",
                "JAVA_HOME=/usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64",
                "PATH=/usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Author": "",
            "History": [
                "ADD file:33ce740675602f8911c110c617b08d74ebe9c26c82226b4815019d8c2d0a2263 in /",
                "CMD [\"/bin/bash\"]",
                "FROM docker.intuit.com/docker-rmt/amazonlinux:latest",
                "# /bin/sh -c yum update --security -y     \u0026\u0026 yum clean all     \u0026\u0026 rm -rf /var/cache/yum",
                "LABEL \"PRETTY_NAME\"=\"Amazon Linux 2\"",
                "LABEL \"image_file\"=\"amzn2-container-raw-2.0.20221004.0-x86_64\"",
                "LABEL \"recipe_id\"=\"a0f48d18-a028-7835-5f63-be90-6cae-a6a7-d1bef075\"",
                "LABEL \"HOME_URL\"=\"https://amazonlinux.com/\"",
                "FROM docker.intuit.com/oicp/base/amazonlinux:2",
                "# ARG INTUIT_VERSION",
                "ARG AMAZONLINUX_VERSION INTUIT_VERSION",
                "ARG AMAZONLINUX_VERSION BUILD_DATE INTUIT_VERSION",
                "ARG AMAZONLINUX_VERSION BUILD_DATE DOCKER_IMAGE_NAME INTUIT_VERSION",
                "LABEL base.description=\"Intuit Amazon Linux 2 Base Image\"     base.maintainer=\"TechArtifactSupport@intuit.com\"     base.build_date=${BUILD_DATE}     vcs_url=\"https://github.intuit.com/dev-patterns/docker-oicp-amazonlinux.git\"     com.intuit.base.intuit_version=${INTUIT_VERSION}     com.intuit.base.amzn_version=${AMAZONLINUX_VERSION}",
                "ENV USER_HOME=/home/appuser     COMMENTS=\"Intuit Application User\"     USERNAME=appuser     USER_UID=1000",
                "ENV PACKAGES=\"        sudo         tar         openssl         shadow-utils         \"",
                "ONBUILD RUN [\"/bin/cat\", \"/etc/future\"]",
                "|4 AMAZONLINUX_VERSION=2 BUILD_DATE=2022-11-14T11:15:11Z DOCKER_IMAGE_NAME=docker.intuit.com/oicp/standard/base/amzn:1.1.39 INTUIT_VERSION=1.1.39 /bin/sh -c     sed -i '1i\\[amzn2-intuit]\\nname=Intuit Amazon Linux 2 Repository\\nbaseurl=https://artifact.intuit.com/artifactory/amzn2-intuit/     \\npriority=10\\nenabled=1\\ngpgcheck=0\\n ' /etc/yum.repos.d/amzn2-core.repo     \u0026\u0026 yum update -y --security     \u0026\u0026 yum install -y ${PACKAGES}     \u0026\u0026 mkdir -p ${USER_HOME}     \u0026\u0026 groupadd ${USERNAME}     \u0026\u0026 useradd -l -u ${USER_UID} -r -g ${USER_UID} -d ${USER_HOME} -s /sbin/nologin -c \"${COMMENTS}\" ${USERNAME}     \u0026\u0026 groupmod -g 1000 ${USERNAME}     \u0026\u0026 echo \"${USERNAME} ALL=(ALL) NOPASSWD:ALL\" \u003e\u003e /etc/sudoers     \u0026\u0026 chown -R ${USERNAME}:0 ${USER_HOME}     \u0026\u0026 chmod -R g+rw ${USER_HOME}     \u0026\u0026 yum remove -y shadow-utils     \u0026\u0026 yum clean all     \u0026\u0026 rm -rf /var/cache/yum/*",
                "COPY multi:ff4d7e28a976715d9de601ebd5c44c3270a4b1c188c8c676e765ae0a57d4dea3 in ${USER_HOME}/",
                "COPY file:88137df33081a381d7cf6c0d07480be8864f1a9bc87df999507e9e8e31ca9dbc in /root",
                "|4 AMAZONLINUX_VERSION=2 BUILD_DATE=2022-11-14T11:15:11Z DOCKER_IMAGE_NAME=docker.intuit.com/oicp/standard/base/amzn:1.1.39 INTUIT_VERSION=1.1.39 /bin/sh -c chmod +x ${USER_HOME}/harden.sh     \u0026\u0026 chmod +x ${USER_HOME}/post_harden.sh     \u0026\u0026 ${USER_HOME}/harden.sh",
                "WORKDIR ${USER_HOME}",
                "USER ${USERNAME}",
                "CMD [ \"bash\" ]",
                "ARG BUILD_DATE=22.11.14",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JIRA_PROJECT=https://jira.intuit.com/projects/AMI",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI",
                "ENV JAVA_HOME=/usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64",
                "ENV PATH=\"${JAVA_HOME}/bin:${PATH}\"",
                "LABEL summary=\"Build a Docker image containing Corretto, which is Amazon's implementation of OpenJDK.\"   description=\"This image can be used as a base image for other applications based on Java. The Corretto image can be extended using the CPD utility.\"   maintainer=\"idevp-patterns-team@intuit.com\"   vcs_url=\"https://github.intuit.com/dev-patterns/ap_corretto.git\"   intuit_ap_sw=\"corretto\"   intuit_ap_sw_version=\"17.0.5.8\"   com.intuit.amzn_baseline_image_semantic_version=\"1.1.39\"   com.intuit.corretto_version=\"17.0.5.8\"   com.intuit.appd_java_agent_version=\"22.10.0.34344\"   com.intuit.jacoco_java_agent_version=\"0.8.8\"   com.intuit.contrast_java_agent_version=\"4.0.0\"   com.intuit.demo_version=\"1.7.2\"   com.intuit.stash_version=\"3.96.0\"",
                "COPY file:b7f941c43852c40790d32f35019343b1c99f3cfa7ddd546df4f4968b49457792 in /goss/goss.yaml",
                "USER root",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c yum -y install curl unzip   \u0026\u0026 curl -sLo /tmp/corretto_install.tar.gz https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/corretto/amazon-corretto-17.0.5.8.1-linux-x64.tar.gz   \u0026\u0026 (md5sum /tmp/corretto_install.tar.gz | grep -c \"332e554fd50993b836b0f8fc1674b0dc\" || (echo \"Bad md5 sum, expecting '332e554fd50993b836b0f8fc1674b0dc' for https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/corretto/amazon-corretto-17.0.5.8.1-linux-x64.tar.gz\"; exit 1))   \u0026\u0026 umask 022   \u0026\u0026 mkdir -p /usr/lib/jvm   \u0026\u0026 tar -zxvf /tmp/corretto_install.tar.gz -C /usr/lib/jvm   \u0026\u0026 rm -f /tmp/corretto_install.tar.gz   \u0026\u0026 ln -s /usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64 /usr/lib/jvm/java-17-amazon-corretto   \u0026\u0026 mkdir -p /usr/java   \u0026\u0026 ln -s /usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64 /usr/java/java-17-amazon-corretto   \u0026\u0026 ln -s /usr/java/java-17-amazon-corretto /usr/java/default  \u0026\u0026 ln -s /usr/java/default /usr/java/latest   \u0026\u0026 ln -s /usr/java/default/bin/java /usr/bin/java   \u0026\u0026 chown -R 0:0 /usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /app/contrast/javaagent/contrast.jar https://artifact.intuit.com/artifactory/generic-local/dev/security/ssdlc/contrast/java/4.0.0/contrast.jar",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /app/jacoco/jacoco-agent-runtime.jar https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/jacoco-agent-runtime-0.8.8.jar",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /app/AppServerAgent-1.8-22.10.0.34344.zip https://artifact.intuit.com/artifactory/generic-intuit/dev/patterns/ap/team/appagent/AppServerAgent-1.8-22.10.0.34344.zip   \u0026\u0026 unzip -oq /app/AppServerAgent-1.8-22.10.0.34344.zip -d /app/appdynamics/   \u0026\u0026 rm -f /app/AppServerAgent-1.8-22.10.0.34344.zip",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /tmp/stash-3.96.0-linux-glibc.tgz https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/stash/stash-3.96.0-linux-glibc.tgz   \u0026\u0026 tar xzf /tmp/stash-3.96.0-linux-glibc.tgz -C /usr/bin/   \u0026\u0026 chown 0:0 /usr/bin/stash   \u0026\u0026 chmod 755 /usr/bin/stash   \u0026\u0026 rm -f /tmp/stash-3.96.0-linux-glibc.tgz",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c chown -R appuser:appuser /app   \u0026\u0026 yum -y remove unzip   \u0026\u0026 yum clean all   \u0026\u0026 rm -rf /var/cache/yum/*",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c sed -i -e 's/EC keySize \u003c 224, 3DES_EDE_CBC, anon, NULL/EC keySize \u003c 224, 3DES_EDE_CBC, anon, NULL, TLSv1, TLSv1.1/g' /usr/lib/jvm/java-17-amazon-corretto/conf/security/java.security",
                "USER appuser",
                "CMD [\"java\", \"--version\"]",
                "java --version"
            ]
        },
        "latest": {
            "Name": "docker-preprod.intuit.com/personal/spr01/oicp/standard/java/amzn-corretto-jdk17",
            "Tag": "latest",
            "Created": "2022-11-14T19:27:26.859029+05:30",
            "Labels": {
                "HOME_URL": "https://amazonlinux.com/",
                "PRETTY_NAME": "Amazon Linux 2",
                "base.build_date": "2022-11-14T11:15:11Z",
                "base.description": "Intuit Amazon Linux 2 Base Image",
                "base.maintainer": "TechArtifactSupport@intuit.com",
                "com.intuit.amzn-corretto-jdk17_semantic_version": "2.2.2",
                "com.intuit.amzn_baseline_image_semantic_version": "1.1.39",
                "com.intuit.appd_java_agent_version": "22.10.0.34344",
                "com.intuit.base.amzn_version": "2",
                "com.intuit.base.intuit_version": "1.1.39",
                "com.intuit.contrast_java_agent_version": "4.0.0",
                "com.intuit.corretto_version": "17.0.5.8",
                "com.intuit.demo_version": "1.7.2",
                "com.intuit.jacoco_java_agent_version": "0.8.8",
                "com.intuit.stash_version": "3.96.0",
                "description": "This image can be used as a base image for other applications based on Java. The Corretto image can be extended using the CPD utility.",
                "image_file": "amzn2-container-raw-2.0.20221004.0-x86_64",
                "intuit_ap_sw": "corretto",
                "intuit_ap_sw_version": "17.0.5.8",
                "io.buildah.version": "1.28.0",
                "lineage": "[\n   {\n      \"ASSET_URL\": \"N/A\",\n      \"CHECKMARX_SCAN_RISK_SEVERITY\": \"\",\n      \"CHECKMARX_SCAN_LINK\": \"\",\n      \"CPD_GIT_HASH\": \"6dfed1a650be78f4dbb3c7746da607d5fa5c7f27\",\n      \"CPD_MAJOR_VERSION\": \"N/A\",\n      \"CPD_VERSION\": \"2.0.1\",\n      \"DOCKERFILE_LINK\": \"https://ffd7ce72995ed3b0070b76f2c72ecd173005300a%40github.intuit.com/dev-patterns/ap_corretto_container/blob/master/Dockerfile\",\n      \"EXCEPTION_CVE_LIST\": \"N/A\",\n      \"FROM\": \"docker.intuit.com/oicp/standard/base/amzn:1.1.39\",\n      \"FROM_IMAGE_DIGEST\": [\n         \"docker.intuit.com/oicp/standard/base/amzn@sha256:4e096f4d10529bea1d70ea8c678927363932cdd07a2d883c05b931727ac22df3\"\n      ],\n      \"GIT_COMMIT_HASH\": \"ce6b1ccdf1b08a0c36f6cd5b2461c101dc6f5413\",\n      \"GITHUB_BRANCH\": \"master\",\n      \"GITHUB_COMMIT_AUTHOR\": \"aramsamy arasu_ramasamy@intuit.com\",\n      \"GITHUB_COMMIT_TIME\": \"2022-11-14T13:40:02Z\",\n      \"GITHUB_LINK\": \"https://ffd7ce72995ed3b0070b76f2c72ecd173005300a%40github.intuit.com/dev-patterns/ap_corretto_container\",\n      \"IQSERVER_HIGHEST_THREAT_LEVEL\": \"\",\n      \"IQSERVER_POLICY_VIOLATIONS\": null,\n      \"IQSERVER_SCAN_LINK\": \"\",\n      \"JIRA_ISSUE\": \"N/A\",\n      \"JIRA_PROJECT\": \"Unknown\",\n      \"MAINTAINER\": \"idevp-patterns-team@intuit.com\",\n      \"UNAUTHORIZED_SOURCE_IMAGES\": [\n         \"N/A\"\n      ]\n   }\n]",
                "maintainer": "idevp-patterns-team@intuit.com",
                "recipe_id": "a0f48d18-a028-7835-5f63-be90-6cae-a6a7-d1bef075",
                "summary": "Build a Docker image containing Corretto, which is Amazon's implementation of OpenJDK.",
                "vcs_url": "https://github.intuit.com/dev-patterns/ap_corretto.git"
            },
            "Architecture": "amd64",
            "Variant": "",
            "Os": "linux",
            "Env": [
                "USER_HOME=/home/appuser",
                "COMMENTS=Intuit Application User",
                "USERNAME=appuser",
                "USER_UID=1000",
                "PACKAGES=        sudo         tar         openssl         shadow-utils         ",
                "JAVA_HOME=/usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64",
                "PATH=/usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Author": "",
            "History": [
                "ADD file:33ce740675602f8911c110c617b08d74ebe9c26c82226b4815019d8c2d0a2263 in /",
                "CMD [\"/bin/bash\"]",
                "FROM docker.intuit.com/docker-rmt/amazonlinux:latest",
                "# /bin/sh -c yum update --security -y     \u0026\u0026 yum clean all     \u0026\u0026 rm -rf /var/cache/yum",
                "LABEL \"PRETTY_NAME\"=\"Amazon Linux 2\"",
                "LABEL \"image_file\"=\"amzn2-container-raw-2.0.20221004.0-x86_64\"",
                "LABEL \"recipe_id\"=\"a0f48d18-a028-7835-5f63-be90-6cae-a6a7-d1bef075\"",
                "LABEL \"HOME_URL\"=\"https://amazonlinux.com/\"",
                "FROM docker.intuit.com/oicp/base/amazonlinux:2",
                "# ARG INTUIT_VERSION",
                "ARG AMAZONLINUX_VERSION INTUIT_VERSION",
                "ARG AMAZONLINUX_VERSION BUILD_DATE INTUIT_VERSION",
                "ARG AMAZONLINUX_VERSION BUILD_DATE DOCKER_IMAGE_NAME INTUIT_VERSION",
                "LABEL base.description=\"Intuit Amazon Linux 2 Base Image\"     base.maintainer=\"TechArtifactSupport@intuit.com\"     base.build_date=${BUILD_DATE}     vcs_url=\"https://github.intuit.com/dev-patterns/docker-oicp-amazonlinux.git\"     com.intuit.base.intuit_version=${INTUIT_VERSION}     com.intuit.base.amzn_version=${AMAZONLINUX_VERSION}",
                "ENV USER_HOME=/home/appuser     COMMENTS=\"Intuit Application User\"     USERNAME=appuser     USER_UID=1000",
                "ENV PACKAGES=\"        sudo         tar         openssl         shadow-utils         \"",
                "ONBUILD RUN [\"/bin/cat\", \"/etc/future\"]",
                "|4 AMAZONLINUX_VERSION=2 BUILD_DATE=2022-11-14T11:15:11Z DOCKER_IMAGE_NAME=docker.intuit.com/oicp/standard/base/amzn:1.1.39 INTUIT_VERSION=1.1.39 /bin/sh -c     sed -i '1i\\[amzn2-intuit]\\nname=Intuit Amazon Linux 2 Repository\\nbaseurl=https://artifact.intuit.com/artifactory/amzn2-intuit/     \\npriority=10\\nenabled=1\\ngpgcheck=0\\n ' /etc/yum.repos.d/amzn2-core.repo     \u0026\u0026 yum update -y --security     \u0026\u0026 yum install -y ${PACKAGES}     \u0026\u0026 mkdir -p ${USER_HOME}     \u0026\u0026 groupadd ${USERNAME}     \u0026\u0026 useradd -l -u ${USER_UID} -r -g ${USER_UID} -d ${USER_HOME} -s /sbin/nologin -c \"${COMMENTS}\" ${USERNAME}     \u0026\u0026 groupmod -g 1000 ${USERNAME}     \u0026\u0026 echo \"${USERNAME} ALL=(ALL) NOPASSWD:ALL\" \u003e\u003e /etc/sudoers     \u0026\u0026 chown -R ${USERNAME}:0 ${USER_HOME}     \u0026\u0026 chmod -R g+rw ${USER_HOME}     \u0026\u0026 yum remove -y shadow-utils     \u0026\u0026 yum clean all     \u0026\u0026 rm -rf /var/cache/yum/*",
                "COPY multi:ff4d7e28a976715d9de601ebd5c44c3270a4b1c188c8c676e765ae0a57d4dea3 in ${USER_HOME}/",
                "COPY file:88137df33081a381d7cf6c0d07480be8864f1a9bc87df999507e9e8e31ca9dbc in /root",
                "|4 AMAZONLINUX_VERSION=2 BUILD_DATE=2022-11-14T11:15:11Z DOCKER_IMAGE_NAME=docker.intuit.com/oicp/standard/base/amzn:1.1.39 INTUIT_VERSION=1.1.39 /bin/sh -c chmod +x ${USER_HOME}/harden.sh     \u0026\u0026 chmod +x ${USER_HOME}/post_harden.sh     \u0026\u0026 ${USER_HOME}/harden.sh",
                "WORKDIR ${USER_HOME}",
                "USER ${USERNAME}",
                "CMD [ \"bash\" ]",
                "ARG BUILD_DATE=22.11.14",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JIRA_PROJECT=https://jira.intuit.com/projects/AMI",
                "ARG BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI",
                "ENV JAVA_HOME=/usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64",
                "ENV PATH=\"${JAVA_HOME}/bin:${PATH}\"",
                "LABEL summary=\"Build a Docker image containing Corretto, which is Amazon's implementation of OpenJDK.\"   description=\"This image can be used as a base image for other applications based on Java. The Corretto image can be extended using the CPD utility.\"   maintainer=\"idevp-patterns-team@intuit.com\"   vcs_url=\"https://github.intuit.com/dev-patterns/ap_corretto.git\"   intuit_ap_sw=\"corretto\"   intuit_ap_sw_version=\"17.0.5.8\"   com.intuit.amzn_baseline_image_semantic_version=\"1.1.39\"   com.intuit.corretto_version=\"17.0.5.8\"   com.intuit.appd_java_agent_version=\"22.10.0.34344\"   com.intuit.jacoco_java_agent_version=\"0.8.8\"   com.intuit.contrast_java_agent_version=\"4.0.0\"   com.intuit.demo_version=\"1.7.2\"   com.intuit.stash_version=\"3.96.0\"",
                "COPY file:b7f941c43852c40790d32f35019343b1c99f3cfa7ddd546df4f4968b49457792 in /goss/goss.yaml",
                "USER root",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c yum -y install curl unzip   \u0026\u0026 curl -sLo /tmp/corretto_install.tar.gz https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/corretto/amazon-corretto-17.0.5.8.1-linux-x64.tar.gz   \u0026\u0026 (md5sum /tmp/corretto_install.tar.gz | grep -c \"332e554fd50993b836b0f8fc1674b0dc\" || (echo \"Bad md5 sum, expecting '332e554fd50993b836b0f8fc1674b0dc' for https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/corretto/amazon-corretto-17.0.5.8.1-linux-x64.tar.gz\"; exit 1))   \u0026\u0026 umask 022   \u0026\u0026 mkdir -p /usr/lib/jvm   \u0026\u0026 tar -zxvf /tmp/corretto_install.tar.gz -C /usr/lib/jvm   \u0026\u0026 rm -f /tmp/corretto_install.tar.gz   \u0026\u0026 ln -s /usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64 /usr/lib/jvm/java-17-amazon-corretto   \u0026\u0026 mkdir -p /usr/java   \u0026\u0026 ln -s /usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64 /usr/java/java-17-amazon-corretto   \u0026\u0026 ln -s /usr/java/java-17-amazon-corretto /usr/java/default  \u0026\u0026 ln -s /usr/java/default /usr/java/latest   \u0026\u0026 ln -s /usr/java/default/bin/java /usr/bin/java   \u0026\u0026 chown -R 0:0 /usr/lib/jvm/amazon-corretto-17.0.5.8.1-linux-x64",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /app/contrast/javaagent/contrast.jar https://artifact.intuit.com/artifactory/generic-local/dev/security/ssdlc/contrast/java/4.0.0/contrast.jar",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /app/jacoco/jacoco-agent-runtime.jar https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/jacoco-agent-runtime-0.8.8.jar",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /app/AppServerAgent-1.8-22.10.0.34344.zip https://artifact.intuit.com/artifactory/generic-intuit/dev/patterns/ap/team/appagent/AppServerAgent-1.8-22.10.0.34344.zip   \u0026\u0026 unzip -oq /app/AppServerAgent-1.8-22.10.0.34344.zip -d /app/appdynamics/   \u0026\u0026 rm -f /app/AppServerAgent-1.8-22.10.0.34344.zip",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c curl --create-dirs -sLo /tmp/stash-3.96.0-linux-glibc.tgz https://artifact.intuit.com/artifactory/generic-local/dev/patterns/ap/team/stash/stash-3.96.0-linux-glibc.tgz   \u0026\u0026 tar xzf /tmp/stash-3.96.0-linux-glibc.tgz -C /usr/bin/   \u0026\u0026 chown 0:0 /usr/bin/stash   \u0026\u0026 chmod 755 /usr/bin/stash   \u0026\u0026 rm -f /tmp/stash-3.96.0-linux-glibc.tgz",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c chown -R appuser:appuser /app   \u0026\u0026 yum -y remove unzip   \u0026\u0026 yum clean all   \u0026\u0026 rm -rf /var/cache/yum/*",
                "|5 BUILD_DATE=22.11.14 DOCKER_IMAGE_NAME=docker.intuit.com/dev/patterns/ap/team/corretto-17.x/amzn2-corretto:17.0.5.8 DOCKER_TAGS=17:17.0:17.0.5:17.0.5.8:17.0.5.8-22.11.14:latest:stable JAVA_VER=java-17 JIRA_PROJECT=https://jira.intuit.com/projects/AMI /bin/sh -c sed -i -e 's/EC keySize \u003c 224, 3DES_EDE_CBC, anon, NULL/EC keySize \u003c 224, 3DES_EDE_CBC, anon, NULL, TLSv1, TLSv1.1/g' /usr/lib/jvm/java-17-amazon-corretto/conf/security/java.security",
                "USER appuser",
                "CMD [\"java\", \"--version\"]",
                "java --version"
            ]
        }
    }
}
]