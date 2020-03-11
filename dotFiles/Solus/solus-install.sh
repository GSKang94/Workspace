#!/bin/bash

if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root"
    exit 1
else
    #Update and Upgrade
    echo "Updating and Upgrading"
    eopkg up -y

    eopkg it dialog
    cmd=(dialog --separate-output --checklist "Please Select Software you want to install:" 22 76 16)
    options=(1 "zsh & wget" off # any option can be set to default to "on"
        2 "Git" off
        3 "VScode" off
        4 "menulibre" off
        5 "Fonts" off
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
        23 "Restore backup" off)
    choices=$("${cmd[@]}" "${options[@]}" 2>&1 >/dev/tty)
    clear
    for choice in $choices; do
        case $choice in
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
            #Install Fonts
            sudo eopkg it -y font-firacode-ttf gnome-font-viewer
            cd ~/dotFiles/Common && xdg-open MesloLGS\ NF\ Regular.ttf
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
            #install Oh my ZSH
            echo "Installing Oh-my-ZSH"
            sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

            echo "installing zsh-autosuggestions"
            git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

            echo "installing zsh-syntax-highlighting"
            git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

            echo "installing Powerlevel10k theme"
            git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

            echo "Finale"
            echo "ZSH_THEME="powerlevel10k/powerlevel10k"

                   plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

                    source $HOME/.aliases"
            gedit .zshrc
            ;;
        11)
            #Move files
            echo "Moving files"
            cd ~/dotFiles/Common && cp dracula.xml ~/.local/share/gedit/styles/ && cp .aliases ~/ && cp -a ./img ~/Pictures
            #cd ~/dotFiles/Solus && cp Solus-backup ~/
            ;;
        12)

            #Chrome
            echo "installing Google chrome"
            sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-stable/pspec.xml

            sudo eopkg it google-chrome-*.eopkg
            sudo rm google-chrome-*.eopkg
            ;;
        13)
            #SPOTIFY
            echo "installing Spotify"
            sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/spotify/pspec.xml

            sudo eopkg it spotify*.eopkg
            sudo rm spotify*.eopkg
            ;;
        14)

            #Slack
            sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/slack-desktop/pspec.xml

            sudo eopkg it slack-desktop*.eopkg
            sudo rm slack-desktop*.eopkg
            ;;
        15)

            #Typora
            echo "opening browser"
            open https://typora.io/linux/Typora-linux-x64.tar.gz
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
            sudo eopkg it teamviewer
            ;;
        20)
            echo "installing stacer"
            sudo eopkg it stacer
            ;;
        21)
            echo "Zoom"
            flatpak install flathub us.zoom.Zoom
            ;;
        22)
            echo "Removing unwanted programs"
            eopkg rm hexchat libreoffice-common firefox thunderbird gparted gnome-photos rhythmbox
            ;;
        23)
            echo "Restore config"
            dconf load / <Solus-backup
            ;;

        esac
    done
fi
