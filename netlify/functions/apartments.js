exports.handler = async function(event, context) {
  const data = process.env.APARTMENTS_JSON || '[]';
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    },
    body: data
  };
};
