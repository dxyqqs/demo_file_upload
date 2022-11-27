async function computedHash(info,type='SHA-256'){
  const hashBuffer = await crypto.subtle.digest(type,info)
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}