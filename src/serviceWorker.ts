
const debuggerTest = async () => {
    const window1 = await chrome.windows.create({
        url : 'https://naver.com'
    });
    const [tab1] = window1.tabs!;

    const window2 = await chrome.windows.create({
        url : 'https://google.com'
    });
    const [tab2] = window2.tabs!;

    await chrome.debugger.attach({tabId : tab1!.id}, '1.3');
    console.log('tab1 : ', tab1.id);
    await chrome.debugger.attach({tabId : tab2!.id}, '1.3');
    console.log('tab2 : ', tab2.id);
    await chrome.debugger.detach({tabId : tab2!.id});
    console.log('detach', tab2.id);
}

chrome.action.onClicked.addListener(debuggerTest);
chrome.debugger.onDetach.addListener((source, reason) => {
    console.log(source, reason);
});