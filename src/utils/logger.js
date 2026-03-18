const isDev = process.env.NODE_ENV !== 'production';

function info(msg) {
  console.log(`[INFO] ${new Date().toISOString()} - ${msg}`);
}

function error(msg) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`);
}

module.exports = { info, error };
