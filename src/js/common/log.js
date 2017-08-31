/*******************************************************************************
 * Copyright © 2017 Hoffmann-La Roche
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

const log = {

    // Adds [TimeMaster] prefix to logs, but keeps correct line numbers when logged to chrome

    info: console.info.bind(window.console,'[TimeMaster]'),
    error: console.error.bind(window.console, '[TimeMaster]'),
    warn: console.warn.bind(window.console, '[TimeMaster]')
};

export default log;