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

const urlParser = {
    // /hangouts/_/roche.com/tomasz-marci-d6?authuser=0
    getHangoutId: urlPathName => urlPathName.split('/')
                                            .filter(e => ['', 'hangouts', '_'].indexOf(e) === -1)
                                            .join('/')
                                            .split('?')[0]
};

export default urlParser;