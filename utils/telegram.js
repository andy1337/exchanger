require('dotenv').config()
const sendPostRequest = require('./post-request');

const token = process.env.BOT_TOKEN;
const baseUrl = `https://api.telegram.org/bot${token}`;

// exports.keyboard = {
//     inline_keyboard: [
//         [
//             {
//                 text: 'Open chat',
//                 callback_data: `chat#${orderId}`,
//             }
//         ],
//     ],
// }

exports.sendMessage = async (id, message, keyboard) => {
    const data = {
        chat_id: id,
        text: message,
        parse_mode: 'HTML',
        reply_markup: keyboard,
    };

    const res = await sendPostRequest(baseUrl + '/sendMessage', data);
    console.log(res)
    return res.data.result;
};