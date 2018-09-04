echo "Installing git"
sudo yum -y install git

echo "Retrieving server Data"
git clone https://rjalvesp:ram10110.G1@github.com/rjalvesp/ZeRO-Renewal.git

echo "Installing NodeJs"
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs
sudo yum -y groupinstall 'Development Tools'
npm -g install yarn
npm -g install forever

echo "Installing Python"
sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm
sudo yum -y update
sudo yum install -y python36u python36u-libs python36u-devel python36u-pip

cd ~/ZeRO-Renewal && yarn
cd ~/ZeRO-Renewal/server && yarn
cd ~/ZeRO-Renewal/client && yarn
cd ~/ZeRO-Renewal/core && python3.6  move.py --path ~/rathena

echo "Installing Rathena"
sudo yum install centos-release-scl
sudo yum install devtoolset-7-gcc devtoolset-7-gcc-c++
cd ~/rathena && ./configure && make clean server
cd ~/rathena && ./athena-start