import * as color from "color";
import * as button from "ui/button";
import * as stack from "ui/layouts/stack-layout";
import * as helper from "../helper";
import * as TKUnit from "../../TKUnit";
import { unsetValue } from "ui/core/view";

export var test_value_Inherited_stronger_than_Default = function () {
    let page = helper.getCurrentPage();
    let btn = new button.Button();
    let testStack = new stack.StackLayout();
    page.content = testStack;
    testStack.addChild(btn);
    page.css = "stackLayout { color: red; }";
    helper.assertViewColor(btn, "#FF0000");
    page.css = "";
}

export var test_value_Css_stronger_than_Inherited = function () {
    let page = helper.getCurrentPage();
    let testStack = new stack.StackLayout();
    page.content = testStack;

    let btn = new button.Button();
    testStack.addChild(btn);
    page.css = "stackLayout { color: red; } button { color: blue; }";

    helper.assertViewColor(btn, "#0000FF");
}

export function test_value_Local_stronger_than_Css() {
    let testPage = helper.getCurrentPage();
    let testStack = new stack.StackLayout();
    testPage.content = testStack;

    let btn = new button.Button();
    testStack.addChild(btn);
    testPage.css = "button { color: red; }";

    helper.assertViewColor(btn, "#FF0000");
    btn.style.color = new color.Color("#0000FF");
    helper.assertViewColor(btn, "#0000FF");
    btn.style.color = unsetValue;
    TKUnit.assertEqual(btn.style.color, undefined, "style.color should be undefined when set locally.");
}
