---
title: qemu上网指南
updated: 2024-12-09
categories : [program, network]
---
# 如何使用bridge连接qemu虚拟机和宿主机

## Requirements
``` 
#本机环境
uname -a
Linux k 6.2.0-37-generic #38.22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Thu Nov 2 18:01:13 UTC 2 x86_64 x86_64 x86_64 GNU/Linux
```

```
 # 安装虚拟网桥工具 brctl
sudo apt install bridge-utils -y
 # 安装(user-mode linux)工具 tunctl
sudo apt install uml-utilities -y
```

## 配置网桥 & qemu设置
```bash
# <user> 当前user名字
# <enp0> 需联网的网卡
# <bridge ip> 设置符合你当前网络网段的IP地址(可以和enp0网卡一样)

sudo brctl addbr br0
sudo tunctl -t tap0 -u <user> 
sudo brctl addif br0 tap0 <enp0> 
sudo ip addr add <bridge ip> dev br0 
sudo ip link set <enp0> up
sudo ip link set tap0 up
```

```
# 设置qemu的网络前端设备和后端设备
qemu-system-i386 \ 
-netdev tap,id=net0,ifname=tap0,script=no,downscript=no \
-device e1000,netdev=net0 \
...
```
# Get your hands dirty

## 如何让qemu虚拟机可以连接网络？
虚拟机连接网络需要两种必要条件，一个是硬件，一个是软件。硬件是网卡，软件就是一整套协议栈和网卡驱动。当虚拟机已经具有最基本条件之后，就需要**外围网络设备**保障网络连接，qemu提供了5种上网策略

1. User Networking (NAT)
2. **Tap Networking** (Bridge Networking)
3. Socket Networking
4. Macvtap Networking
5. Host Networking

我选用了第二种策略。
**Tap Networking** (Bridge Networking) 这种联网方式是通过`tap`设备将虚拟机和宿主机的**网桥**上，虚拟机和宿主机通过网桥连接。这样宿主机可以通过网桥**转发**虚拟机流量从而共享宿主机的网卡。这一套外围设备是宿主机提供的，让我们一步一步设置。

## 外围设备
先看一下初始网络接口信息

```bash
ip addr show 
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp0s31f6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether xx:xx:xx:68:ca:24 brd ff:ff:ff:ff:ff:ff

```
> 实体网卡**enps31f6**就是可以链接网络的网卡。

---

新建一个网桥**br0**

```bash 
sudo brctl addbr br0
```
---

新建一个叫做**tap0**的tap接口

```bash 
sudo tunctl -t tap0 -u <user>
# 设置tap0 UP
sudo ip link set up dev tap0
```

> 这里的<user>填写允许访问这个tap0接口的用户

---
这时候的网络接口情况

```bash
$ sudo ip addr show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp0s31f6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 9c:2d:cd:68:ca:24 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.14/24 brd 192.168.1.255 scope global dynamic enp0s31f6
       valid_lft 604042sec preferred_lft 604042sec
11: br0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 56:a6:1d:0c:23:17 brd ff:ff:ff:ff:ff:ff
12: tap0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 26:a8:e6:ba:b0:cd brd ff:ff:ff:ff:ff:ff
```
---
把网卡和tap0接口都添加到网桥上



```bash
sudo brctl show
bridge name	bridge id		STP enabled	interfaces
br0		8000.56a61d0c2317	no
```

>网桥**br0**被添加接口前

--- 
```bash
sudo brctl addif br0 tap0 enp0s31f6
```
---


```bash
sudo brctl show
bridge name	bridge id		STP enabled	interfaces
br0		8000.56a61d0c2317	no		 enp0s31f6
							         tap0
```
> 网桥**br0**被添加接口后

本来联网的网卡**enp0s31f6**就不会在处理数据包了他的ip地址也会不见，现在的网络接口信息如下

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp0s31f6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UP group default qlen 1000
    link/ether 9c:2d:cd:68:ca:24 brd ff:ff:ff:ff:ff:ff
11: br0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 56:a6:1d:0c:23:17 brd ff:ff:ff:ff:ff:ff
12: tap0: <BROADCAST,MULTICAST,UP> mtu 1500 qdisc noop master br0 state DOWN group default qlen 1000
    link/ether 26:a8:e6:ba:b0:cd brd ff:ff:ff:ff:ff:ff
```

这时候需要给网桥分配一个适合你网段的ip地址，或者使用`sudo dhclient br0`给**br0**提供一个ip地址。
到这里宿主机的外围设备配置就结束了。
##qemu配置

```bash
	qemu-system-i386 \
	-S \
	-s \
	-monitor stdio \
	-m 1G \
	-hda ubuntu-disk.img \
	-rtc base=localtime,clock=host \
	-netdev tap,id=net0,ifname=tap0,script=no,downscript=no \
	-device e1000,netdev=net0 \
	-audiodev id=alsa,driver=alsa \
	-machine pcspk-audiodev=alsa \
	-cdrom ./ubuntu-14.04.6-server-i386.iso
```
关键的就是对网络设备的配置，
```-netdev tap,id=net0,ifname=tap0,script=no,downscript=no
 -device e1000,netdev=net0```
`-netdev`用于指定网络后端实现，这里是用**tap**接口实现，**ifname**这个选项对应的接口
就是刚刚宿主机新建的tap接口**tap0**
`-device`则是配置网卡
和使用指定的netdev实现。


#Troublesh0oting 

1. 网桥配置完全之后只有二层协议可以通过但是三层协议被丢包，怎么解决？ 
有可能是你的宿主机的`iptables`拦截了流量，查看iptable的规则，或者直接关闭
    网桥转发数据的包经过iptables处理。查看这两个文件是不是`1`设成`0`关闭。
    ```cat /proc/sys/net/bridge/bridge-nf-call-iptables
       cat /proc/sys/net/bridge/bridge-nf-call-ip6tables```
    你也可以编辑 `/etc/sysctl.conf` 添加
    
    ```bash
    net.bridge.bridge-nf-call-iptables = 1
    ```
    `sudo sysctl -p`应用修改来永久修改这个配置项 
    或者
    
    ```bash
    [Unit]
    Description=Setup qemu network bridging
  After=network-online.target
[Service]
Type=oneshot
Restart=on-failure
ExecStart=brctl addbr virtbr0
ExecStart=brctl addif virtbr0 enp3s0
ExecStart=ip addr add 192.168.0.20/24 dev virtbr0
ExecStart=ip link set virtbr0 up
ExecStart=iptables -I FORWARD -m physdev --physdev-is-bridged -j ACCEPT
[Install]
WantedBy=multi-user.target
    ```
    
2. 你可能需要给tap0和br0配置promisc启动混杂模式来监听流过他们的所有  

   ```bash
      sudo ip link set promisc on dev tap0
      sudo ip link set promisc on dev br
   ```
    


## 参考链接
[1](https://wiki.qemu.org/Documentation/Networking) QEMU Networking 

[2](https://lifeislife.cn/posts/qemu%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%BD%91%E7%BB%9C%E9%85%8D%E7%BD%AE/) QEMU 虚拟机网络配置 

[3](https://gist.github.com/extremecoders-re/e8fd8a67a515fee0c873dcafc81d811c) Setting up Qemu with a tap interface

[4 ](https://www.spad.uk/posts/really-simple-network-bridging-with-qemu/)这里提到了iptables转发流量的设置

[更多关于tap/tun](https://www.junmajinlong.com/virtual/network/all_about_tun_tap/) 

---

### 后
虽然设置好虚拟机的网卡但一直没有几乎添加协议栈内容;*(，希望有几乎实现协议栈。

Thu Feb 13 05:37:47 PM CST 2025
