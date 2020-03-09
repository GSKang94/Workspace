# update system
sudo eopkg up

#install ZSH,  Git, vscode, menulibre, fonts, font-viewer
sudo eopkg it -y zsh git wget vscode menulibre font-firacode-ttf gnome-font-viewer peek

#generate ssh key
git config --global user.name 'GSingh1994'

git config --global user.email 'singh.gagandeep0034@gmail.com'

ssh-keygen -t rsa -C "singh.gagandeep0034@gmail.com"

cat ~/.ssh/id_rsa.pub 

#gedit theme
mkdir .local/share/gedit && mkdir .local/share/gedit/styles

cd Workspace/dotFiles/Common

cp dracula.xml ../../../.local/share/gedit/styles/

#aliases
cp .aliases ../../../

#install Oh my ZSH
cd

sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

#zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

#zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

#Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

# Finale
nano .zshrc

ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

source $HOME/.aliases

#emoji-support
cd Workspace/dotFiles/Solus/emoji-support
cp -r fontconfig ../../../../.config/
cp -r .fonts ../../../../

                          #CHROME

sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-stable/pspec.xml

sudo eopkg it google-chrome-*.eopkg;sudo rm google-chrome-*.eopkg

                         #SPOTIFY
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/spotify/pspec.xml

sudo eopkg it spotify*.eopkg;sudo rm spotify*.eopkg


                           #SLACK
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/slack-desktop/pspec.xml

sudo eopkg it slack-desktop*.eopkg;sudo rm slack-desktop*.eopkg

                           #TYPORA

xdg-open https://typora.io/linux/Typora-linux-x64.tar.gz


                            #TLDR
sudo npm install -g tldr


                           #STREAMIO
git clone https://github.com/alexandru-balan/Stremio-Install-Scripts.git && cd Stremio-Install-Scripts && chmod 755 installStremioSolus.sh && ./installStremioSolus.sh


#backup config
dconf dump / > Solus-backup

#restore config
dconf load / < Solus-backup


# Backup icons & themes
tar -cvpf custom-icons.tar.gz ~/.icons

tar -cvpf custom-themes.tar.gz ~/.themes

#restore icons & themes
tar --extract --file custom-icons.tar.gz -C ~/ --strip-components=2

tar --extract --file custom-themes.tar.gz -C ~/ --strip-components=2


#
sudo mv /usr/lib/evolution-data-server /usr/lib/evolution-data-server-disabled\n

sudo mv /usr/lib/evolution /usr/lib/evolution-disabled\n


