'use strict';

import logger from '../src/config/logger.mjs';
import app from '../app.mjs';

const PORT = process.env.PORT || 3000;

// server
app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다!`);
});
