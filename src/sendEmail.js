let serverAddress = "https://cary-tanner-mailer.herokuapp.com/mailing";




export async function sendEmail(data) {
  console.log('sending fetch')
  try {
  const response = await fetch(serverAddress, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json()
} catch (error){
  
  return error
}
}
