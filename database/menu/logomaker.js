const logomaker = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
  ❏ Version: 「  2.4.9  」
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *LOGO MAKER*
  │
  ├─ ❏ ${prefix}marvellogo
  ├─ ❏ ${prefix}ninjalogo
  ├─ ❏ ${prefix}logowolf
  ├─ ❏ ${prefix}logowolf2
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}neonlogo
  ├─ ❏ ${prefix}neonlogo2
  ├─ ❏ ${prefix}lionlogo
  └─ ❏ ${prefix}jokerlogo
◪ *OTHER*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}timer
  ├─ ❏ ${prefix}fml
  └─ ❏ ${prefix}fml2
◪ *${ownerName}*`
}
exports.logomaker = logomaker
