export const getEpoch = () => {
    const now = new Date();
    const seconds = Math.round(now.getTime()/1000);
    return seconds;
}