/*CMD
  command: *
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Please enter the IP address you want to check*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

HTTP.get({
  url: "https://test-only-two.vercel.app/api/ipinfo?ip=" + message,
  success: "/onIP",
  error: "/onIPInfoError"
});
