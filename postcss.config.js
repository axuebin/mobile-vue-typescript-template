const px2remConfigs = {
    baseDpr: 1,
    remUnit: 37.5,
    onePxComment: '1px',
    forcePxComment: '!px',
    keepComment: '!no',
    forcePxProperty: ['font-size'],
};

module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-px2rem')(px2remConfigs),
    ],
};
