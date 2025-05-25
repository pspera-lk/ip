/*CMD
  command: /onIP
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let data = JSON.parse(content);

if (data.success) {
  let ipInfo = data.data;
  let msg = "🌐 *IP Information*\n\n";
  msg += "🔹 *IP:* " + ipInfo.ip + "\n";
  msg += "🏳️ *Country:* " + ipInfo.country + "\n";
  msg += "🏙️ *City:* " + ipInfo.city + ", " + ipInfo.region + "\n";
  msg += "📍 *District:* " + ipInfo.district + "\n";
  msg += "🏢 *ISP:* " + ipInfo.isp + "\n";
  msg += "🌐 *Domain:* " + ipInfo.domain + "\n";
  msg += "📡 *Net Speed:* " + ipInfo.net_speed + "\n";
  msg += "📮 *ZIP Code:* " + ipInfo.zip + "\n";
  msg += "🕒 *Timezone:* " + ipInfo.timezone + "\n";
  msg += "🧭 *Latitude:* " + ipInfo.latitude + "\n";
  msg += "🧭 *Longitude:* " + ipInfo.longitude + "\n";
  msg += "🌦️ *Weather Station:* " + ipInfo.weather_station + "\n";
  msg += "📶 *ASN:* " + ipInfo.asn + " (" + ipInfo.as_name + ")\n";
  msg += "🛡️ *Fraud Score:* " + ipInfo.fraud_score + "\n";
  msg += "🕵️ *Proxy:* " + (ipInfo.is_proxy ? "Yes" : "No");

  Bot.sendMessage(msg, { parse_mode: "Markdown" });
} else {
  Bot.sendMessage("❌ Failed to get IP info.");
}
