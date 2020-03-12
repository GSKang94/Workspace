
#Call powertop auto-tune automatically at boot time
cat << EOF | sudo tee /etc/systemd/system/powertop.service
[Unit]
Description=PowerTOP auto tune

[Service]
Type=idle
Environment="TERM=dumb"
ExecStart=/usr/sbin/powertop --auto-tune

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable powertop.service


# Disable evolution-alarm-notify
sudo mv /usr/lib/evolution-data-server /usr/lib/evolution-data-server-disabled\n

sudo mv /usr/lib/evolution /usr/lib/evolution-disabled\n

