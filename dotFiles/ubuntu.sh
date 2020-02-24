# update system
sudo apt-get update && sudo apt-get upgrade

#Git
git config --global user.name 'GSingh1994'

git config --global user.email 'singh.gagandeep0034@gmail.com'

ssh-keygen -t rsa -C "singh.gagandeep0034@gmail.com"

cat ~/.ssh/id_rsa.pub 

#gedit theme
mkdir .local/share/gedit && mkdir .local/share/gedit/styles

cd Downloads/Workspace/dotfiles

cp dracula.xml ../../../.local/share/gedit/styles/

#aliases
cp .aliases ../../../

#install ZSH & Git
sudo apt-get install curl zsh git -y

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

ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

#My Alias file
source $HOME/.aliases

sudo apt autoremove
                          #CHROME

#Download and install the key

wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

#Add the key to the repository

sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

#Finally, Update repository and install Google Chrome.

sudo apt-get update
sudo apt-get install google-chrome-stable


                          #VSCODE

#install the dependencies by typing:

sudo apt install software-properties-common apt-transport-https wget

#Next, import the Microsoft GPG key using the following wget command:

wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -

#enable the Visual Studio Code repository by typing:

sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"

#Once the apt repository is enabled, install the latest version of Visual Studio Code with:

sudo apt update
sudo apt install code

                            #SLACK
#get deb package
wget https://downloads.slack-edge.com/linux_releases/slack-desktop-4.3.2-amd64.deb

sudo dpkg -i slack-desktop-*.deb

                           #TYPORA
# Key
wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -
# add Typora's repository
sudo add-apt-repository 'deb https://typora.io/linux ./'
sudo apt-get update
# install typora
sudo apt-get install typora

                         #SPOTIFY

#Add key
curl -sS https://download.spotify.com/debian/pubkey.gpg | sudo apt-key add - 
#Add repo.
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
#install
sudo apt-get update && sudo apt-get install spotify-client

                           #PEEK
sudo add-apt-repository ppa:peek-developers/stable
sudo apt update
sudo apt install peek

                           #Gdebi
sudo apt install gdebi

                           #Node.js
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs

                            #TLDR
sudo npm install -g tldr

                            #FFF
sudo apt install fonts-firacode


                           #Cleanup
#remove evolution


#remove snapd
sudo apt purge snapd
rm -rf ~/snap

#remove gnome software center
sudo apt purge gnome-software


# install gnome shell integration
sudo apt install chrome-gnome-shell


#Reupdate system
sudo apt-get update && sudo apt-get upgrade

#backup config
dconf dump / > Ubuntu-backup

#restore config
dconf load / < Ubuntu-backup



