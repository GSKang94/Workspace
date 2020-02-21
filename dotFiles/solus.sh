#!/bin/bash
#sudo su
# update system
sudo eopkg update-r epo
sudo eopkg upgrade

#install ZSH & Git
sudo eopkg install -y zsh git wget

#make ZSH default
chsh -s $(which zsh)

#install Oh my ZSH
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

#zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

#zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

#Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k


                          #CHROME

sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-stable/pspec.xml

sudo eopkg it google-chrome-*.eopkg;sudo rm google-chrome-*.eopkg

                         #SPOTIFY
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/spotify/pspec.xml

sudo eopkg it spotify*.eopkg;sudo rm spotify*.eopkg

                          #VSCODE

sudo eopkg install code

                           #SLACK
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/slack-desktop/pspec.xml

sudo eopkg it slack-desktop*.eopkg;sudo rm slack-desktop*.eopkg

                           #TYPORA



                           #PEEK
sudo eopkg it peek

                           #Node.js
#Software center

                            #TLDR
sudo npm install -g tldr

                            #FFF
sudo eopkg install font-firacode-ttf font-firacode-otf


                           #STREAMIO
git clone https://github.com/alexandru-balan/Stremio-Install-Scripts.git 
cd Stremio-Install-Scripts 
chmod 755 installStremioSolus.sh 
./installStremioSolus.sh


# GNOME extension to move bar to bottom
git clone https://github.com/home-sweet-gnome/dash-to-panel.git panel
cd panel && make install
cd ..
rm -rf panel
gnome-shell-extension-tool -e dash-to-panel

# Set up the desktop environment
#cp ../img/desktop.jpg ~/desktop.jpg
#cp ../img/lock.jpg ~/lock.jpg
dconf load /org/gnome/ < ../../settings.dconf

