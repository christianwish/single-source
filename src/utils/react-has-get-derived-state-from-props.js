export const reactHasGetDerivedStateFromProps = (versionString) => {
    if (
        typeof versionString !== 'string' ||
        !/^[0-9]{1,}\.[0-9]{1,}/.test(versionString)
    ) {
        return false;
    }

    const versionArray = versionString.split('.');
    const major = parseInt(versionArray[0], 10);
    const minor = parseInt(versionArray[1], 10);

    return ((major > 16) || (major === 16 && minor >= 3));
};
