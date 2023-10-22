"use strict";
/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 15:29:10
 * @LastEditTime: 2023-10-22 15:30:40
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/enum/code.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.code = void 0;
exports.code = {
    // ====== user =======
    // RegistrationFailedCode 注册失败
    RegistrationFailedCode: 1,
    // UserIsRegisteredCode 用户已注册
    UserIsRegisteredCode: 2,
    // PleaseLogInCode 请先登录
    PleaseLogInCode: 4,
    PleaseLogInCodeText: "请先登录",
    // TokenParsingException token解析异常
    TokenParsingException: 5,
    TokenParsingExceptionText: "token解析异常",
    // MailboxIsMalformedCode 邮箱格式有误
    MailboxIsMalformedCode: 6,
    MailboxIsMalformedCodeText: "邮箱格式有误",
    // UsernameCannotBeLongerThan8DigitsCode 用户名长度不可高于8位
    UsernameCannotBeLongerThan8DigitsCode: 7,
    UsernameCannotBeLongerThan8DigitsText: "用户名长度不可高于8位",
    // PasswordCannotBeLongerThan16DigitsCode 密码长度不可高于16位
    PasswordCannotBeLongerThan16DigitsCode: 8,
    PasswordCannotBeLongerThan16DigitsText: "密码长度不可高于16位",
    // ====== app ======
    // ===== common ====
    PageErrorCode: 3,
    // IDPassedIsIncorrect 传递的id不正确
    IDPassedIsIncorrect: 9,
    IDPassedIsIncorrectText: "id有误",
};
