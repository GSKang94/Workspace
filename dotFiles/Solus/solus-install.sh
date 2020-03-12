#!/bin/bash
sudo eopkg it dialog
cmd=(dialog --separate-output --checklist "Please Select Software you want to install:" 22 76 16)
options=(0 "System update" off
    1 "zsh & wget" off # any option can be set to default to "on"
    2 "Git" off
    3 "VScode" off
    4 "menulibre" off
    5 "Fonts & emojis" off
    6 "Peek" off
    7 "Powertop" off
    8 "Budgie-calendar-applet" off
    9 "generate ssh key" off
    10 "install Oh my ZSH" off
    11 "Move files" off
    12 "Google Chrome" off
    13 "Spotify" off
    14 "Slack" off
    15 "Typora" off
    16 "tdr" off
    17 "Add Cantaloupe and flathub repo" off
    18 "Stremio" off
    19 "Teamviewer" off
    20 "Stacer" off
    21 "Zoom" off
    22 "Cleaning" off
    23 "Restore backup" off
    24 "Make Backup" off
    25 "App-outlet" off
    26 "Typora" off)
choices=$("${cmd[@]}" "${options[@]}" 2>&1 >/dev/tty)
clear
for choice in $choices; do
    case $choice in
    0)
        #Update and Upgrade
        echo "Updating and Upgrading"
        sudo eopkg up -y
        ;;
    1)
        #install ZSH & wget
        echo "Installing zsh & wget"
        sudo eopkg it -y zsh wget
        ;;

    2)
        #Install Git
        echo "Installing Git"
        sudo eopkg it -y git
        ;;
    3)
        #Install VScode
        echo "Installing VScode"
        sudo eopkg it -y vscode
        ;;

    4)
        #Install menulibre
        echo "Installing menulibre"
        sudo eopkg it -y menulibre
        ;;

    5)
        #Install Fonts & emojis
        sudo eopkg it -y font-firacode-ttf gnome-font-viewer
        echo "Adding emoji-support"
        #emoji-support
        cd ~/dotFiles/Solus/emoji-support && cp -r fontconfig ~/.config/ && cp -r .fonts ~/
        fc-cache -f -v
        ;;
    6)
        #install Peek
        echo "Installing peek"
        sudo eopkg it -y peek
        ;;
    7)
        #Powertop
        echo "Installing Powertop"
        sudo eopkg it -y powertop
        ;;
    8)
        #budgie-calendar-applet
        echo "Installing budgie-calendar-applet"
        sudo eopkg it -y budgie-calendar-applet
        ;;
    9)
        #generate ssh key
        echo "generating ssh key"
        git config --global user.name 'GSingh1994' && git config --global user.email 'singh.gagandeep0034@gmail.com' && ssh-keygen -t rsa -C "singh.gagandeep0034@gmail.com"
        echo "installing xclip"
        sudo eopkg it -y xclip
        xclip -sel c <~/.ssh/id_rsa.pub
        echo "Your ssh key has been copied to clipboard"
        ;;
    10)
#zsh plugins
        echo "installing zsh-autosuggestions"
        git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

        echo "installing zsh-syntax-highlighting"
        git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

#powerlevel10K
        echo "installing Powerlevel10k theme"
        git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

 #install Oh my ZSH 
        echo "Installing Oh-my-ZSH"
        sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
        ;;
    11)
        #Move files
        echo "Moving files"
        cp -r ~/dotFiles/Common/gedit ~/.local/share/ && cp ~/dotFiles/Common/.aliases ~/ && cp ~/dotFiles/Common/.zshrc ~/ && cp ~/dotFiles/Common/img/* ~/Pictures
        ;;
    12)

        #Chrome
        echo "installing Google chrome"
        sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-stable/pspec.xml -y
        sudo eopkg it google-chrome-*.eopkg -y
        sudo rm google-chrome-*.eopkg -y
        ;;
    13)
        #SPOTIFY
        echo "installing Spotify"
        sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/spotify/pspec.xml -y
        sudo eopkg it spotify*.eopkg -y
        sudo rm spotify*.eopkg -y
        ;;
    14)

        #Slack
        sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/slack-desktop/pspec.xml -y
        sudo eopkg it slack-desktop*.eopkg -y
        sudo rm slack-desktop*.eopkg -y
        ;;
    15)

        #Typora
        echo "opening browser"
        xdg-open https://typora.io/linux/Typora-linux-x64.tar.gz
        ;;
    16)
        #TLDR
        echo "installing tldr"
        sudo npm install -g tldr
        ;;
    17)

        #Add Cantaloupe repo
        echo "Adding Cantaloupe repository"
        sudo eopkg add-repo Cantalupo https://solus.cantalupo.com.br/eopkg-index.xml.xz
        echo "Adding Flathub Repo"
        flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
        ;;
    18)
        #Stremio
        echo "Installing stremio"
        sudo eopkg it -y stremio
        ;;
    19)
        echo "installing Teamviewer"
        sudo eopkg it -y teamviewer
        ;;
    20)
        echo "installing stacer"
        sudo eopkg it -y stacer
        ;;
    21)
        echo "Zoom"
        flatpak install flathub us.zoom.Zoom -y
        ;;
    22)
        echo "Removing unwanted programs"
        sudo eopkg rm hexchat libreoffice-common firefox thunderbird gparted gnome-photos rhythmbox baobab-y
        sudo eopkg rmo -y
        sudo flatpak uninstall --unused -y
        ;;
    23)
        echo "Restore config"
        dconf load / <Solus-backup
        echo "Backup-restored"
        ;;
    24)
        echo "Backing up ....."
        dconf dump / >Solus-backup
        echo "Backup Complete"
        ;;
    25)
        echo "Installing app-outlet"
        xdg-open https://github.com/app-outlet/app-outlet/releases/download/v1.3.2/App.Outlet-1.3.2.AppImage
        ;;
    26)
       echo "fetching typora"
       xdg-open https://typora.io/linux/Typora-linux-x64.tar.gz
    esac
done
