/**
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2016 ForgeRock AS.
 */

define([
    "org/forgerock/commons/ui/common/main/Router"
], function (Router) {
    QUnit.module('Router Functions');

    QUnit.test("getLink", function () {
        var fakeRoute = {
            url: /fake-(.+)\-(.+)/,
            pattern: "fake-?-?"
        };

        QUnit.equal(Router.getLink(fakeRoute, ["simple", "value"]), "fake-simple-value");
        QUnit.equal(Router.getLink(fakeRoute, ["comp?lex", "value"]), "fake-comp?lex-value");
        QUnit.equal(Router.getLink(fakeRoute, ["part?ial"]), "fake-part?ial-");
        QUnit.equal(Router.getLink(fakeRoute, []), "fake--");

    });

});
