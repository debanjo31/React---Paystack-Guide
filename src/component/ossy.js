const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }
form.addEventListener('submit', onGenerateSubmit);

 async function  onGenerateSubmi(){
  
    
    // Check if the device is able to share these files then open share dialog
    if (navigator.canShare && navigator.canShare({ files: [image] })) {
      try {
        await navigator.share({
          title: shareData.title,  // Share dialog title
          url:  shareData.url,
          text: shareData.text
        })
      } catch (error) {
        console.log('Sharing failed!', error)
      }
    } else {
      console.log('This device does not support sharing files.')
    
}

 }