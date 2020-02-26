# update system
sudo eopkg up

#install ZSH & Git
sudo eopkg install -y zsh git wget

#install Oh my ZSH
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

#zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

#zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

#Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

nano .zshrc

ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

source $HOME/.aliases

                          #CHROME

sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-stable/pspec.xml

sudo eopkg it google-chrome-*.eopkg;sudo rm google-chrome-*.eopkg

                         #SPOTIFY
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/spotify/pspec.xml

sudo eopkg it spotify*.eopkg;sudo rm spotify*.eopkg

                          #VSCODE

sudo eopkg install vscode

                           #SLACK
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/slack-desktop/pspec.xml

sudo eopkg it slack-desktop*.eopkg;sudo rm slack-desktop*.eopkg

                           #TYPORA

xdg-open https://typora.io/linux/Typora-linux-x64.tar.gz

                           #PEEK
sudo eopkg it peek

                         #Menulibre
sudo eopkg install menulibre

                           #Node.js (already with vscode)
#sudo eopkg install nodejs

                            #TLDR
sudo npm install -g tldr

                            #FFF
sudo eopkg install font-firacode-ttf


                           #STREAMIO
git clone https://github.com/alexandru-balan/Stremio-Install-Scripts.git 
cd Stremio-Install-Scripts 
chmod 755 installStremioSolus.sh 
./installStremioSolus.sh


#backup config
dconf dump / > Solus-backup

#restore config
dconf load / < Solus-backup

