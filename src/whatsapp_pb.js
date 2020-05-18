// source: whatsapp.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.wa.AdReplyInfo', null, global);
goog.exportSymbol('proto.wa.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE', null, global);
goog.exportSymbol('proto.wa.AudioMessage', null, global);
goog.exportSymbol('proto.wa.Call', null, global);
goog.exportSymbol('proto.wa.CallButton', null, global);
goog.exportSymbol('proto.wa.CancelPaymentRequestMessage', null, global);
goog.exportSymbol('proto.wa.CatalogSnapshot', null, global);
goog.exportSymbol('proto.wa.Chat', null, global);
goog.exportSymbol('proto.wa.ContactMessage', null, global);
goog.exportSymbol('proto.wa.ContactsArrayMessage', null, global);
goog.exportSymbol('proto.wa.ContextInfo', null, global);
goog.exportSymbol('proto.wa.DeclinePaymentRequestMessage', null, global);
goog.exportSymbol('proto.wa.DeviceSentMessage', null, global);
goog.exportSymbol('proto.wa.DocumentMessage', null, global);
goog.exportSymbol('proto.wa.ExtendedTextMessage', null, global);
goog.exportSymbol('proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE', null, global);
goog.exportSymbol('proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE', null, global);
goog.exportSymbol('proto.wa.FourRowTemplate', null, global);
goog.exportSymbol('proto.wa.FourRowTemplate.TitleCase', null, global);
goog.exportSymbol('proto.wa.GroupInviteMessage', null, global);
goog.exportSymbol('proto.wa.HSMCurrency', null, global);
goog.exportSymbol('proto.wa.HSMDateTime', null, global);
goog.exportSymbol('proto.wa.HSMDateTime.DatetimeoneofCase', null, global);
goog.exportSymbol('proto.wa.HSMDateTimeComponent', null, global);
goog.exportSymbol('proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE', null, global);
goog.exportSymbol('proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE', null, global);
goog.exportSymbol('proto.wa.HSMDateTimeUnixEpoch', null, global);
goog.exportSymbol('proto.wa.HSMLocalizableParameter', null, global);
goog.exportSymbol('proto.wa.HSMLocalizableParameter.ParamoneofCase', null, global);
goog.exportSymbol('proto.wa.HighlyStructuredMessage', null, global);
goog.exportSymbol('proto.wa.HistorySyncNotification', null, global);
goog.exportSymbol('proto.wa.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE', null, global);
goog.exportSymbol('proto.wa.HydratedCallButton', null, global);
goog.exportSymbol('proto.wa.HydratedFourRowTemplate', null, global);
goog.exportSymbol('proto.wa.HydratedFourRowTemplate.TitleCase', null, global);
goog.exportSymbol('proto.wa.HydratedQuickReplyButton', null, global);
goog.exportSymbol('proto.wa.HydratedTemplateButton', null, global);
goog.exportSymbol('proto.wa.HydratedTemplateButton.HydratedbuttonCase', null, global);
goog.exportSymbol('proto.wa.HydratedURLButton', null, global);
goog.exportSymbol('proto.wa.ImageMessage', null, global);
goog.exportSymbol('proto.wa.InteractiveAnnotation', null, global);
goog.exportSymbol('proto.wa.InteractiveAnnotation.ActionCase', null, global);
goog.exportSymbol('proto.wa.LiveLocationMessage', null, global);
goog.exportSymbol('proto.wa.Location', null, global);
goog.exportSymbol('proto.wa.LocationMessage', null, global);
goog.exportSymbol('proto.wa.Message', null, global);
goog.exportSymbol('proto.wa.MessageKey', null, global);
goog.exportSymbol('proto.wa.NotificationMessageInfo', null, global);
goog.exportSymbol('proto.wa.PaymentInfo', null, global);
goog.exportSymbol('proto.wa.PaymentInfo.PAYMENT_INFO_CURRENCY', null, global);
goog.exportSymbol('proto.wa.PaymentInfo.PAYMENT_INFO_STATUS', null, global);
goog.exportSymbol('proto.wa.PaymentInfo.PAYMENT_INFO_TXNSTATUS', null, global);
goog.exportSymbol('proto.wa.Point', null, global);
goog.exportSymbol('proto.wa.ProductMessage', null, global);
goog.exportSymbol('proto.wa.ProductSnapshot', null, global);
goog.exportSymbol('proto.wa.ProtocolMessage', null, global);
goog.exportSymbol('proto.wa.ProtocolMessage.PROTOCOL_MESSAGE_TYPE', null, global);
goog.exportSymbol('proto.wa.QuickReplyButton', null, global);
goog.exportSymbol('proto.wa.RequestPaymentMessage', null, global);
goog.exportSymbol('proto.wa.SendPaymentMessage', null, global);
goog.exportSymbol('proto.wa.SenderKeyDistributionMessage', null, global);
goog.exportSymbol('proto.wa.StickerMessage', null, global);
goog.exportSymbol('proto.wa.TabletNotificationsInfo', null, global);
goog.exportSymbol('proto.wa.TemplateButton', null, global);
goog.exportSymbol('proto.wa.TemplateButton.ButtonCase', null, global);
goog.exportSymbol('proto.wa.TemplateButtonReplyMessage', null, global);
goog.exportSymbol('proto.wa.TemplateMessage', null, global);
goog.exportSymbol('proto.wa.TemplateMessage.FormatCase', null, global);
goog.exportSymbol('proto.wa.URLButton', null, global);
goog.exportSymbol('proto.wa.VideoMessage', null, global);
goog.exportSymbol('proto.wa.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION', null, global);
goog.exportSymbol('proto.wa.WebFeatures', null, global);
goog.exportSymbol('proto.wa.WebFeatures.WEB_FEATURES_FLAG', null, global);
goog.exportSymbol('proto.wa.WebMessageInfo', null, global);
goog.exportSymbol('proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STATUS', null, global);
goog.exportSymbol('proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE', null, global);
goog.exportSymbol('proto.wa.WebNotificationsInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HydratedQuickReplyButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.HydratedQuickReplyButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HydratedQuickReplyButton.displayName = 'proto.wa.HydratedQuickReplyButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HydratedURLButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.HydratedURLButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HydratedURLButton.displayName = 'proto.wa.HydratedURLButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HydratedCallButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.HydratedCallButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HydratedCallButton.displayName = 'proto.wa.HydratedCallButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HydratedTemplateButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wa.HydratedTemplateButton.oneofGroups_);
};
goog.inherits(proto.wa.HydratedTemplateButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HydratedTemplateButton.displayName = 'proto.wa.HydratedTemplateButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.QuickReplyButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.QuickReplyButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.QuickReplyButton.displayName = 'proto.wa.QuickReplyButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.URLButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.URLButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.URLButton.displayName = 'proto.wa.URLButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.CallButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.CallButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.CallButton.displayName = 'proto.wa.CallButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.TemplateButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wa.TemplateButton.oneofGroups_);
};
goog.inherits(proto.wa.TemplateButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.TemplateButton.displayName = 'proto.wa.TemplateButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.Location.displayName = 'proto.wa.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.Point.displayName = 'proto.wa.Point';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.InteractiveAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.InteractiveAnnotation.repeatedFields_, proto.wa.InteractiveAnnotation.oneofGroups_);
};
goog.inherits(proto.wa.InteractiveAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.InteractiveAnnotation.displayName = 'proto.wa.InteractiveAnnotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.AdReplyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.AdReplyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.AdReplyInfo.displayName = 'proto.wa.AdReplyInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ContextInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.ContextInfo.repeatedFields_, null);
};
goog.inherits(proto.wa.ContextInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ContextInfo.displayName = 'proto.wa.ContextInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.SenderKeyDistributionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.SenderKeyDistributionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.SenderKeyDistributionMessage.displayName = 'proto.wa.SenderKeyDistributionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ImageMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.ImageMessage.repeatedFields_, null);
};
goog.inherits(proto.wa.ImageMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ImageMessage.displayName = 'proto.wa.ImageMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ContactMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.ContactMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ContactMessage.displayName = 'proto.wa.ContactMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.LocationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.LocationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.LocationMessage.displayName = 'proto.wa.LocationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ExtendedTextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.ExtendedTextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ExtendedTextMessage.displayName = 'proto.wa.ExtendedTextMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.DocumentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.DocumentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.DocumentMessage.displayName = 'proto.wa.DocumentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.AudioMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.AudioMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.AudioMessage.displayName = 'proto.wa.AudioMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.VideoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.VideoMessage.repeatedFields_, null);
};
goog.inherits(proto.wa.VideoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.VideoMessage.displayName = 'proto.wa.VideoMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.Call = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.Call, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.Call.displayName = 'proto.wa.Call';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.Chat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.Chat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.Chat.displayName = 'proto.wa.Chat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ProtocolMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.ProtocolMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ProtocolMessage.displayName = 'proto.wa.ProtocolMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HistorySyncNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.HistorySyncNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HistorySyncNotification.displayName = 'proto.wa.HistorySyncNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ContactsArrayMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.ContactsArrayMessage.repeatedFields_, null);
};
goog.inherits(proto.wa.ContactsArrayMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ContactsArrayMessage.displayName = 'proto.wa.ContactsArrayMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HSMCurrency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.HSMCurrency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HSMCurrency.displayName = 'proto.wa.HSMCurrency';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HSMDateTimeComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.HSMDateTimeComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HSMDateTimeComponent.displayName = 'proto.wa.HSMDateTimeComponent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HSMDateTimeUnixEpoch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.HSMDateTimeUnixEpoch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HSMDateTimeUnixEpoch.displayName = 'proto.wa.HSMDateTimeUnixEpoch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HSMDateTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wa.HSMDateTime.oneofGroups_);
};
goog.inherits(proto.wa.HSMDateTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HSMDateTime.displayName = 'proto.wa.HSMDateTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HSMLocalizableParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wa.HSMLocalizableParameter.oneofGroups_);
};
goog.inherits(proto.wa.HSMLocalizableParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HSMLocalizableParameter.displayName = 'proto.wa.HSMLocalizableParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HighlyStructuredMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.HighlyStructuredMessage.repeatedFields_, null);
};
goog.inherits(proto.wa.HighlyStructuredMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HighlyStructuredMessage.displayName = 'proto.wa.HighlyStructuredMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.SendPaymentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.SendPaymentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.SendPaymentMessage.displayName = 'proto.wa.SendPaymentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.RequestPaymentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.RequestPaymentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.RequestPaymentMessage.displayName = 'proto.wa.RequestPaymentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.DeclinePaymentRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.DeclinePaymentRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.DeclinePaymentRequestMessage.displayName = 'proto.wa.DeclinePaymentRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.CancelPaymentRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.CancelPaymentRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.CancelPaymentRequestMessage.displayName = 'proto.wa.CancelPaymentRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.LiveLocationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.LiveLocationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.LiveLocationMessage.displayName = 'proto.wa.LiveLocationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.StickerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.StickerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.StickerMessage.displayName = 'proto.wa.StickerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.FourRowTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.FourRowTemplate.repeatedFields_, proto.wa.FourRowTemplate.oneofGroups_);
};
goog.inherits(proto.wa.FourRowTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.FourRowTemplate.displayName = 'proto.wa.FourRowTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.HydratedFourRowTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.HydratedFourRowTemplate.repeatedFields_, proto.wa.HydratedFourRowTemplate.oneofGroups_);
};
goog.inherits(proto.wa.HydratedFourRowTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.HydratedFourRowTemplate.displayName = 'proto.wa.HydratedFourRowTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.TemplateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wa.TemplateMessage.oneofGroups_);
};
goog.inherits(proto.wa.TemplateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.TemplateMessage.displayName = 'proto.wa.TemplateMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.TemplateButtonReplyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.TemplateButtonReplyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.TemplateButtonReplyMessage.displayName = 'proto.wa.TemplateButtonReplyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.CatalogSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.CatalogSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.CatalogSnapshot.displayName = 'proto.wa.CatalogSnapshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ProductSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.ProductSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ProductSnapshot.displayName = 'proto.wa.ProductSnapshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.ProductMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.ProductMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.ProductMessage.displayName = 'proto.wa.ProductMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.GroupInviteMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.GroupInviteMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.GroupInviteMessage.displayName = 'proto.wa.GroupInviteMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.DeviceSentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.DeviceSentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.DeviceSentMessage.displayName = 'proto.wa.DeviceSentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.Message.displayName = 'proto.wa.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.MessageKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.MessageKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.MessageKey.displayName = 'proto.wa.MessageKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.WebFeatures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.WebFeatures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.WebFeatures.displayName = 'proto.wa.WebFeatures';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.TabletNotificationsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.TabletNotificationsInfo.repeatedFields_, null);
};
goog.inherits(proto.wa.TabletNotificationsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.TabletNotificationsInfo.displayName = 'proto.wa.TabletNotificationsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.NotificationMessageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.NotificationMessageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.NotificationMessageInfo.displayName = 'proto.wa.NotificationMessageInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.WebNotificationsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.WebNotificationsInfo.repeatedFields_, null);
};
goog.inherits(proto.wa.WebNotificationsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.WebNotificationsInfo.displayName = 'proto.wa.WebNotificationsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.PaymentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wa.PaymentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.PaymentInfo.displayName = 'proto.wa.PaymentInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wa.WebMessageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wa.WebMessageInfo.repeatedFields_, null);
};
goog.inherits(proto.wa.WebMessageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wa.WebMessageInfo.displayName = 'proto.wa.WebMessageInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HydratedQuickReplyButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HydratedQuickReplyButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HydratedQuickReplyButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedQuickReplyButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HydratedQuickReplyButton}
 */
proto.wa.HydratedQuickReplyButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HydratedQuickReplyButton;
  return proto.wa.HydratedQuickReplyButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HydratedQuickReplyButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HydratedQuickReplyButton}
 */
proto.wa.HydratedQuickReplyButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HydratedQuickReplyButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HydratedQuickReplyButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HydratedQuickReplyButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedQuickReplyButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayText = 1;
 * @return {string}
 */
proto.wa.HydratedQuickReplyButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedQuickReplyButton} returns this
 */
proto.wa.HydratedQuickReplyButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedQuickReplyButton} returns this
 */
proto.wa.HydratedQuickReplyButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedQuickReplyButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.wa.HydratedQuickReplyButton.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedQuickReplyButton} returns this
 */
proto.wa.HydratedQuickReplyButton.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedQuickReplyButton} returns this
 */
proto.wa.HydratedQuickReplyButton.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedQuickReplyButton.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HydratedURLButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HydratedURLButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HydratedURLButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedURLButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HydratedURLButton}
 */
proto.wa.HydratedURLButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HydratedURLButton;
  return proto.wa.HydratedURLButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HydratedURLButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HydratedURLButton}
 */
proto.wa.HydratedURLButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HydratedURLButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HydratedURLButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HydratedURLButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedURLButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayText = 1;
 * @return {string}
 */
proto.wa.HydratedURLButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedURLButton} returns this
 */
proto.wa.HydratedURLButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedURLButton} returns this
 */
proto.wa.HydratedURLButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedURLButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.wa.HydratedURLButton.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedURLButton} returns this
 */
proto.wa.HydratedURLButton.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedURLButton} returns this
 */
proto.wa.HydratedURLButton.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedURLButton.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HydratedCallButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HydratedCallButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HydratedCallButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedCallButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    phonenumber: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HydratedCallButton}
 */
proto.wa.HydratedCallButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HydratedCallButton;
  return proto.wa.HydratedCallButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HydratedCallButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HydratedCallButton}
 */
proto.wa.HydratedCallButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HydratedCallButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HydratedCallButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HydratedCallButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedCallButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayText = 1;
 * @return {string}
 */
proto.wa.HydratedCallButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedCallButton} returns this
 */
proto.wa.HydratedCallButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedCallButton} returns this
 */
proto.wa.HydratedCallButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedCallButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string phoneNumber = 2;
 * @return {string}
 */
proto.wa.HydratedCallButton.prototype.getPhonenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedCallButton} returns this
 */
proto.wa.HydratedCallButton.prototype.setPhonenumber = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedCallButton} returns this
 */
proto.wa.HydratedCallButton.prototype.clearPhonenumber = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedCallButton.prototype.hasPhonenumber = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.HydratedTemplateButton.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.wa.HydratedTemplateButton.HydratedbuttonCase = {
  HYDRATEDBUTTON_NOT_SET: 0,
  QUICKREPLYBUTTON: 1,
  URLBUTTON: 2,
  CALLBUTTON: 3
};

/**
 * @return {proto.wa.HydratedTemplateButton.HydratedbuttonCase}
 */
proto.wa.HydratedTemplateButton.prototype.getHydratedbuttonCase = function() {
  return /** @type {proto.wa.HydratedTemplateButton.HydratedbuttonCase} */(jspb.Message.computeOneofCase(this, proto.wa.HydratedTemplateButton.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HydratedTemplateButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HydratedTemplateButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HydratedTemplateButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedTemplateButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    quickreplybutton: (f = msg.getQuickreplybutton()) && proto.wa.HydratedQuickReplyButton.toObject(includeInstance, f),
    urlbutton: (f = msg.getUrlbutton()) && proto.wa.HydratedURLButton.toObject(includeInstance, f),
    callbutton: (f = msg.getCallbutton()) && proto.wa.HydratedCallButton.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HydratedTemplateButton}
 */
proto.wa.HydratedTemplateButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HydratedTemplateButton;
  return proto.wa.HydratedTemplateButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HydratedTemplateButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HydratedTemplateButton}
 */
proto.wa.HydratedTemplateButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 1:
      var value = new proto.wa.HydratedQuickReplyButton;
      reader.readMessage(value,proto.wa.HydratedQuickReplyButton.deserializeBinaryFromReader);
      msg.setQuickreplybutton(value);
      break;
    case 2:
      var value = new proto.wa.HydratedURLButton;
      reader.readMessage(value,proto.wa.HydratedURLButton.deserializeBinaryFromReader);
      msg.setUrlbutton(value);
      break;
    case 3:
      var value = new proto.wa.HydratedCallButton;
      reader.readMessage(value,proto.wa.HydratedCallButton.deserializeBinaryFromReader);
      msg.setCallbutton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HydratedTemplateButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HydratedTemplateButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HydratedTemplateButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedTemplateButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getQuickreplybutton();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.HydratedQuickReplyButton.serializeBinaryToWriter
    );
  }
  f = message.getUrlbutton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.HydratedURLButton.serializeBinaryToWriter
    );
  }
  f = message.getCallbutton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.HydratedCallButton.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 4;
 * @return {number}
 */
proto.wa.HydratedTemplateButton.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HydratedTemplateButton} returns this
 */
proto.wa.HydratedTemplateButton.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedTemplateButton} returns this
 */
proto.wa.HydratedTemplateButton.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedTemplateButton.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HydratedQuickReplyButton quickReplyButton = 1;
 * @return {?proto.wa.HydratedQuickReplyButton}
 */
proto.wa.HydratedTemplateButton.prototype.getQuickreplybutton = function() {
  return /** @type{?proto.wa.HydratedQuickReplyButton} */ (
    jspb.Message.getWrapperField(this, proto.wa.HydratedQuickReplyButton, 1));
};


/**
 * @param {?proto.wa.HydratedQuickReplyButton|undefined} value
 * @return {!proto.wa.HydratedTemplateButton} returns this
*/
proto.wa.HydratedTemplateButton.prototype.setQuickreplybutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wa.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HydratedTemplateButton} returns this
 */
proto.wa.HydratedTemplateButton.prototype.clearQuickreplybutton = function() {
  return this.setQuickreplybutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedTemplateButton.prototype.hasQuickreplybutton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HydratedURLButton urlButton = 2;
 * @return {?proto.wa.HydratedURLButton}
 */
proto.wa.HydratedTemplateButton.prototype.getUrlbutton = function() {
  return /** @type{?proto.wa.HydratedURLButton} */ (
    jspb.Message.getWrapperField(this, proto.wa.HydratedURLButton, 2));
};


/**
 * @param {?proto.wa.HydratedURLButton|undefined} value
 * @return {!proto.wa.HydratedTemplateButton} returns this
*/
proto.wa.HydratedTemplateButton.prototype.setUrlbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wa.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HydratedTemplateButton} returns this
 */
proto.wa.HydratedTemplateButton.prototype.clearUrlbutton = function() {
  return this.setUrlbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedTemplateButton.prototype.hasUrlbutton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HydratedCallButton callButton = 3;
 * @return {?proto.wa.HydratedCallButton}
 */
proto.wa.HydratedTemplateButton.prototype.getCallbutton = function() {
  return /** @type{?proto.wa.HydratedCallButton} */ (
    jspb.Message.getWrapperField(this, proto.wa.HydratedCallButton, 3));
};


/**
 * @param {?proto.wa.HydratedCallButton|undefined} value
 * @return {!proto.wa.HydratedTemplateButton} returns this
*/
proto.wa.HydratedTemplateButton.prototype.setCallbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.wa.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HydratedTemplateButton} returns this
 */
proto.wa.HydratedTemplateButton.prototype.clearCallbutton = function() {
  return this.setCallbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedTemplateButton.prototype.hasCallbutton = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.QuickReplyButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.QuickReplyButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.QuickReplyButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.QuickReplyButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f),
    id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.QuickReplyButton}
 */
proto.wa.QuickReplyButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.QuickReplyButton;
  return proto.wa.QuickReplyButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.QuickReplyButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.QuickReplyButton}
 */
proto.wa.QuickReplyButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.QuickReplyButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.QuickReplyButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.QuickReplyButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.QuickReplyButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.QuickReplyButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.QuickReplyButton} returns this
*/
proto.wa.QuickReplyButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.QuickReplyButton} returns this
 */
proto.wa.QuickReplyButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.QuickReplyButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.wa.QuickReplyButton.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.QuickReplyButton} returns this
 */
proto.wa.QuickReplyButton.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.QuickReplyButton} returns this
 */
proto.wa.QuickReplyButton.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.QuickReplyButton.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.URLButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.URLButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.URLButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.URLButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f),
    url: (f = msg.getUrl()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.URLButton}
 */
proto.wa.URLButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.URLButton;
  return proto.wa.URLButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.URLButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.URLButton}
 */
proto.wa.URLButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.URLButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.URLButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.URLButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.URLButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.URLButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.URLButton} returns this
*/
proto.wa.URLButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.URLButton} returns this
 */
proto.wa.URLButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.URLButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage url = 2;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.URLButton.prototype.getUrl = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.URLButton} returns this
*/
proto.wa.URLButton.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.URLButton} returns this
 */
proto.wa.URLButton.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.URLButton.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.CallButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.CallButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.CallButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.CallButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f),
    phonenumber: (f = msg.getPhonenumber()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.CallButton}
 */
proto.wa.CallButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.CallButton;
  return proto.wa.CallButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.CallButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.CallButton}
 */
proto.wa.CallButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setPhonenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.CallButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.CallButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.CallButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.CallButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getPhonenumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.CallButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.CallButton} returns this
*/
proto.wa.CallButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.CallButton} returns this
 */
proto.wa.CallButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.CallButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage phoneNumber = 2;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.CallButton.prototype.getPhonenumber = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.CallButton} returns this
*/
proto.wa.CallButton.prototype.setPhonenumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.CallButton} returns this
 */
proto.wa.CallButton.prototype.clearPhonenumber = function() {
  return this.setPhonenumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.CallButton.prototype.hasPhonenumber = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.TemplateButton.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.wa.TemplateButton.ButtonCase = {
  BUTTON_NOT_SET: 0,
  QUICKREPLYBUTTON: 1,
  URLBUTTON: 2,
  CALLBUTTON: 3
};

/**
 * @return {proto.wa.TemplateButton.ButtonCase}
 */
proto.wa.TemplateButton.prototype.getButtonCase = function() {
  return /** @type {proto.wa.TemplateButton.ButtonCase} */(jspb.Message.computeOneofCase(this, proto.wa.TemplateButton.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.TemplateButton.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.TemplateButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.TemplateButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TemplateButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    quickreplybutton: (f = msg.getQuickreplybutton()) && proto.wa.QuickReplyButton.toObject(includeInstance, f),
    urlbutton: (f = msg.getUrlbutton()) && proto.wa.URLButton.toObject(includeInstance, f),
    callbutton: (f = msg.getCallbutton()) && proto.wa.CallButton.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.TemplateButton}
 */
proto.wa.TemplateButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.TemplateButton;
  return proto.wa.TemplateButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.TemplateButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.TemplateButton}
 */
proto.wa.TemplateButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 1:
      var value = new proto.wa.QuickReplyButton;
      reader.readMessage(value,proto.wa.QuickReplyButton.deserializeBinaryFromReader);
      msg.setQuickreplybutton(value);
      break;
    case 2:
      var value = new proto.wa.URLButton;
      reader.readMessage(value,proto.wa.URLButton.deserializeBinaryFromReader);
      msg.setUrlbutton(value);
      break;
    case 3:
      var value = new proto.wa.CallButton;
      reader.readMessage(value,proto.wa.CallButton.deserializeBinaryFromReader);
      msg.setCallbutton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.TemplateButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.TemplateButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.TemplateButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TemplateButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getQuickreplybutton();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.QuickReplyButton.serializeBinaryToWriter
    );
  }
  f = message.getUrlbutton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.URLButton.serializeBinaryToWriter
    );
  }
  f = message.getCallbutton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.CallButton.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 4;
 * @return {number}
 */
proto.wa.TemplateButton.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.TemplateButton} returns this
 */
proto.wa.TemplateButton.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.TemplateButton} returns this
 */
proto.wa.TemplateButton.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButton.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional QuickReplyButton quickReplyButton = 1;
 * @return {?proto.wa.QuickReplyButton}
 */
proto.wa.TemplateButton.prototype.getQuickreplybutton = function() {
  return /** @type{?proto.wa.QuickReplyButton} */ (
    jspb.Message.getWrapperField(this, proto.wa.QuickReplyButton, 1));
};


/**
 * @param {?proto.wa.QuickReplyButton|undefined} value
 * @return {!proto.wa.TemplateButton} returns this
*/
proto.wa.TemplateButton.prototype.setQuickreplybutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wa.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateButton} returns this
 */
proto.wa.TemplateButton.prototype.clearQuickreplybutton = function() {
  return this.setQuickreplybutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButton.prototype.hasQuickreplybutton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional URLButton urlButton = 2;
 * @return {?proto.wa.URLButton}
 */
proto.wa.TemplateButton.prototype.getUrlbutton = function() {
  return /** @type{?proto.wa.URLButton} */ (
    jspb.Message.getWrapperField(this, proto.wa.URLButton, 2));
};


/**
 * @param {?proto.wa.URLButton|undefined} value
 * @return {!proto.wa.TemplateButton} returns this
*/
proto.wa.TemplateButton.prototype.setUrlbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wa.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateButton} returns this
 */
proto.wa.TemplateButton.prototype.clearUrlbutton = function() {
  return this.setUrlbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButton.prototype.hasUrlbutton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CallButton callButton = 3;
 * @return {?proto.wa.CallButton}
 */
proto.wa.TemplateButton.prototype.getCallbutton = function() {
  return /** @type{?proto.wa.CallButton} */ (
    jspb.Message.getWrapperField(this, proto.wa.CallButton, 3));
};


/**
 * @param {?proto.wa.CallButton|undefined} value
 * @return {!proto.wa.TemplateButton} returns this
*/
proto.wa.TemplateButton.prototype.setCallbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.wa.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateButton} returns this
 */
proto.wa.TemplateButton.prototype.clearCallbutton = function() {
  return this.setCallbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButton.prototype.hasCallbutton = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    degreeslatitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    degreeslongitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.Location}
 */
proto.wa.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.Location;
  return proto.wa.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.Location}
 */
proto.wa.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslongitude(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.wa.Location.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.Location} returns this
 */
proto.wa.Location.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Location} returns this
 */
proto.wa.Location.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Location.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.wa.Location.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.Location} returns this
 */
proto.wa.Location.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Location} returns this
 */
proto.wa.Location.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Location.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.wa.Location.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.Location} returns this
 */
proto.wa.Location.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Location} returns this
 */
proto.wa.Location.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Location.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Point.toObject = function(includeInstance, msg) {
  var f, obj = {
    xdeprecated: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ydeprecated: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    x: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    y: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.Point}
 */
proto.wa.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.Point;
  return proto.wa.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.Point}
 */
proto.wa.Point.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setXdeprecated(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYdeprecated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Point.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional int32 xDeprecated = 1;
 * @return {number}
 */
proto.wa.Point.prototype.getXdeprecated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.setXdeprecated = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.clearXdeprecated = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Point.prototype.hasXdeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 yDeprecated = 2;
 * @return {number}
 */
proto.wa.Point.prototype.getYdeprecated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.setYdeprecated = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.clearYdeprecated = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Point.prototype.hasYdeprecated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double x = 3;
 * @return {number}
 */
proto.wa.Point.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.setX = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.clearX = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Point.prototype.hasX = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double y = 4;
 * @return {number}
 */
proto.wa.Point.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.setY = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Point} returns this
 */
proto.wa.Point.prototype.clearY = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Point.prototype.hasY = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.InteractiveAnnotation.repeatedFields_ = [1];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.InteractiveAnnotation.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.wa.InteractiveAnnotation.ActionCase = {
  ACTION_NOT_SET: 0,
  LOCATION: 2
};

/**
 * @return {proto.wa.InteractiveAnnotation.ActionCase}
 */
proto.wa.InteractiveAnnotation.prototype.getActionCase = function() {
  return /** @type {proto.wa.InteractiveAnnotation.ActionCase} */(jspb.Message.computeOneofCase(this, proto.wa.InteractiveAnnotation.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.InteractiveAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.InteractiveAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.InteractiveAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.InteractiveAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    polygonverticesList: jspb.Message.toObjectList(msg.getPolygonverticesList(),
    proto.wa.Point.toObject, includeInstance),
    location: (f = msg.getLocation()) && proto.wa.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.InteractiveAnnotation}
 */
proto.wa.InteractiveAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.InteractiveAnnotation;
  return proto.wa.InteractiveAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.InteractiveAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.InteractiveAnnotation}
 */
proto.wa.InteractiveAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.Point;
      reader.readMessage(value,proto.wa.Point.deserializeBinaryFromReader);
      msg.addPolygonvertices(value);
      break;
    case 2:
      var value = new proto.wa.Location;
      reader.readMessage(value,proto.wa.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.InteractiveAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.InteractiveAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.InteractiveAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.InteractiveAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolygonverticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wa.Point.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Point polygonVertices = 1;
 * @return {!Array<!proto.wa.Point>}
 */
proto.wa.InteractiveAnnotation.prototype.getPolygonverticesList = function() {
  return /** @type{!Array<!proto.wa.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.Point, 1));
};


/**
 * @param {!Array<!proto.wa.Point>} value
 * @return {!proto.wa.InteractiveAnnotation} returns this
*/
proto.wa.InteractiveAnnotation.prototype.setPolygonverticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wa.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.Point}
 */
proto.wa.InteractiveAnnotation.prototype.addPolygonvertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wa.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.InteractiveAnnotation} returns this
 */
proto.wa.InteractiveAnnotation.prototype.clearPolygonverticesList = function() {
  return this.setPolygonverticesList([]);
};


/**
 * optional Location location = 2;
 * @return {?proto.wa.Location}
 */
proto.wa.InteractiveAnnotation.prototype.getLocation = function() {
  return /** @type{?proto.wa.Location} */ (
    jspb.Message.getWrapperField(this, proto.wa.Location, 2));
};


/**
 * @param {?proto.wa.Location|undefined} value
 * @return {!proto.wa.InteractiveAnnotation} returns this
*/
proto.wa.InteractiveAnnotation.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wa.InteractiveAnnotation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.InteractiveAnnotation} returns this
 */
proto.wa.InteractiveAnnotation.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.InteractiveAnnotation.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.AdReplyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.AdReplyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.AdReplyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.AdReplyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    advertisername: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mediatype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    caption: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.AdReplyInfo}
 */
proto.wa.AdReplyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.AdReplyInfo;
  return proto.wa.AdReplyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.AdReplyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.AdReplyInfo}
 */
proto.wa.AdReplyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdvertisername(value);
      break;
    case 2:
      var value = /** @type {!proto.wa.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (reader.readEnum());
      msg.setMediatype(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.AdReplyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.AdReplyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.AdReplyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.AdReplyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.wa.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE = {
  NONE: 0,
  IMAGE: 1,
  VIDEO: 2
};

/**
 * optional string advertiserName = 1;
 * @return {string}
 */
proto.wa.AdReplyInfo.prototype.getAdvertisername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.setAdvertisername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.clearAdvertisername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AdReplyInfo.prototype.hasAdvertisername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AD_REPLY_INFO_MEDIATYPE mediaType = 2;
 * @return {!proto.wa.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE}
 */
proto.wa.AdReplyInfo.prototype.getMediatype = function() {
  return /** @type {!proto.wa.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.wa.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} value
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.setMediatype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.clearMediatype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AdReplyInfo.prototype.hasMediatype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.AdReplyInfo.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.AdReplyInfo.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.AdReplyInfo.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AdReplyInfo.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string caption = 17;
 * @return {string}
 */
proto.wa.AdReplyInfo.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AdReplyInfo} returns this
 */
proto.wa.AdReplyInfo.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AdReplyInfo.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.ContextInfo.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ContextInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ContextInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ContextInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ContextInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    stanzaid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    quotedmessage: (f = msg.getQuotedmessage()) && proto.wa.Message.toObject(includeInstance, f),
    remotejid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    mentionedjidList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    conversionsource: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    conversiondata: msg.getConversiondata_asB64(),
    conversiondelayseconds: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    forwardingscore: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    isforwarded: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    quotedad: (f = msg.getQuotedad()) && proto.wa.AdReplyInfo.toObject(includeInstance, f),
    placeholderkey: (f = msg.getPlaceholderkey()) && proto.wa.MessageKey.toObject(includeInstance, f),
    expiration: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    ephemeralsettingtimestamp: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
    ephemeralsharedsecret: msg.getEphemeralsharedsecret_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ContextInfo}
 */
proto.wa.ContextInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ContextInfo;
  return proto.wa.ContextInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ContextInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ContextInfo}
 */
proto.wa.ContextInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStanzaid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    case 3:
      var value = new proto.wa.Message;
      reader.readMessage(value,proto.wa.Message.deserializeBinaryFromReader);
      msg.setQuotedmessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemotejid(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addMentionedjid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversionsource(value);
      break;
    case 19:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConversiondata(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConversiondelayseconds(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setForwardingscore(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsforwarded(value);
      break;
    case 23:
      var value = new proto.wa.AdReplyInfo;
      reader.readMessage(value,proto.wa.AdReplyInfo.deserializeBinaryFromReader);
      msg.setQuotedad(value);
      break;
    case 24:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setPlaceholderkey(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiration(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEphemeralsettingtimestamp(value);
      break;
    case 27:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEphemeralsharedsecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ContextInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ContextInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ContextInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ContextInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuotedmessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMentionedjidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBytes(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getQuotedad();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.wa.AdReplyInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlaceholderkey();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeUint32(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeInt64(
      26,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeBytes(
      27,
      f
    );
  }
};


/**
 * optional string stanzaId = 1;
 * @return {string}
 */
proto.wa.ContextInfo.prototype.getStanzaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setStanzaid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearStanzaid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasStanzaid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string participant = 2;
 * @return {string}
 */
proto.wa.ContextInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Message quotedMessage = 3;
 * @return {?proto.wa.Message}
 */
proto.wa.ContextInfo.prototype.getQuotedmessage = function() {
  return /** @type{?proto.wa.Message} */ (
    jspb.Message.getWrapperField(this, proto.wa.Message, 3));
};


/**
 * @param {?proto.wa.Message|undefined} value
 * @return {!proto.wa.ContextInfo} returns this
*/
proto.wa.ContextInfo.prototype.setQuotedmessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearQuotedmessage = function() {
  return this.setQuotedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasQuotedmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string remoteJid = 4;
 * @return {string}
 */
proto.wa.ContextInfo.prototype.getRemotejid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setRemotejid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearRemotejid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasRemotejid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string mentionedJid = 15;
 * @return {!Array<string>}
 */
proto.wa.ContextInfo.prototype.getMentionedjidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setMentionedjidList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.addMentionedjid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearMentionedjidList = function() {
  return this.setMentionedjidList([]);
};


/**
 * optional string conversionSource = 18;
 * @return {string}
 */
proto.wa.ContextInfo.prototype.getConversionsource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setConversionsource = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearConversionsource = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasConversionsource = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bytes conversionData = 19;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ContextInfo.prototype.getConversiondata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * optional bytes conversionData = 19;
 * This is a type-conversion wrapper around `getConversiondata()`
 * @return {string}
 */
proto.wa.ContextInfo.prototype.getConversiondata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConversiondata()));
};


/**
 * optional bytes conversionData = 19;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConversiondata()`
 * @return {!Uint8Array}
 */
proto.wa.ContextInfo.prototype.getConversiondata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConversiondata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setConversiondata = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearConversiondata = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasConversiondata = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 conversionDelaySeconds = 20;
 * @return {number}
 */
proto.wa.ContextInfo.prototype.getConversiondelayseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setConversiondelayseconds = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearConversiondelayseconds = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasConversiondelayseconds = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint32 forwardingScore = 21;
 * @return {number}
 */
proto.wa.ContextInfo.prototype.getForwardingscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setForwardingscore = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearForwardingscore = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasForwardingscore = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool isForwarded = 22;
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.getIsforwarded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setIsforwarded = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearIsforwarded = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasIsforwarded = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional AdReplyInfo quotedAd = 23;
 * @return {?proto.wa.AdReplyInfo}
 */
proto.wa.ContextInfo.prototype.getQuotedad = function() {
  return /** @type{?proto.wa.AdReplyInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.AdReplyInfo, 23));
};


/**
 * @param {?proto.wa.AdReplyInfo|undefined} value
 * @return {!proto.wa.ContextInfo} returns this
*/
proto.wa.ContextInfo.prototype.setQuotedad = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearQuotedad = function() {
  return this.setQuotedad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasQuotedad = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional MessageKey placeholderKey = 24;
 * @return {?proto.wa.MessageKey}
 */
proto.wa.ContextInfo.prototype.getPlaceholderkey = function() {
  return /** @type{?proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 24));
};


/**
 * @param {?proto.wa.MessageKey|undefined} value
 * @return {!proto.wa.ContextInfo} returns this
*/
proto.wa.ContextInfo.prototype.setPlaceholderkey = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearPlaceholderkey = function() {
  return this.setPlaceholderkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasPlaceholderkey = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional uint32 expiration = 25;
 * @return {number}
 */
proto.wa.ContextInfo.prototype.getExpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setExpiration = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearExpiration = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional int64 ephemeralSettingTimestamp = 26;
 * @return {number}
 */
proto.wa.ContextInfo.prototype.getEphemeralsettingtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setEphemeralsettingtimestamp = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearEphemeralsettingtimestamp = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasEphemeralsettingtimestamp = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ContextInfo.prototype.getEphemeralsharedsecret = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * This is a type-conversion wrapper around `getEphemeralsharedsecret()`
 * @return {string}
 */
proto.wa.ContextInfo.prototype.getEphemeralsharedsecret_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEphemeralsharedsecret()));
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEphemeralsharedsecret()`
 * @return {!Uint8Array}
 */
proto.wa.ContextInfo.prototype.getEphemeralsharedsecret_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEphemeralsharedsecret()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.setEphemeralsharedsecret = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContextInfo} returns this
 */
proto.wa.ContextInfo.prototype.clearEphemeralsharedsecret = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContextInfo.prototype.hasEphemeralsharedsecret = function() {
  return jspb.Message.getField(this, 27) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.SenderKeyDistributionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.SenderKeyDistributionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.SenderKeyDistributionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.SenderKeyDistributionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    axolotlsenderkeydistributionmessage: msg.getAxolotlsenderkeydistributionmessage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.SenderKeyDistributionMessage}
 */
proto.wa.SenderKeyDistributionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.SenderKeyDistributionMessage;
  return proto.wa.SenderKeyDistributionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.SenderKeyDistributionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.SenderKeyDistributionMessage}
 */
proto.wa.SenderKeyDistributionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAxolotlsenderkeydistributionmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.SenderKeyDistributionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.SenderKeyDistributionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.SenderKeyDistributionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.SenderKeyDistributionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string groupId = 1;
 * @return {string}
 */
proto.wa.SenderKeyDistributionMessage.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.SenderKeyDistributionMessage} returns this
 */
proto.wa.SenderKeyDistributionMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.SenderKeyDistributionMessage} returns this
 */
proto.wa.SenderKeyDistributionMessage.prototype.clearGroupid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.SenderKeyDistributionMessage.prototype.hasGroupid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * @return {!(string|Uint8Array)}
 */
proto.wa.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * This is a type-conversion wrapper around `getAxolotlsenderkeydistributionmessage()`
 * @return {string}
 */
proto.wa.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAxolotlsenderkeydistributionmessage()));
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAxolotlsenderkeydistributionmessage()`
 * @return {!Uint8Array}
 */
proto.wa.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAxolotlsenderkeydistributionmessage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.SenderKeyDistributionMessage} returns this
 */
proto.wa.SenderKeyDistributionMessage.prototype.setAxolotlsenderkeydistributionmessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.SenderKeyDistributionMessage} returns this
 */
proto.wa.SenderKeyDistributionMessage.prototype.clearAxolotlsenderkeydistributionmessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.SenderKeyDistributionMessage.prototype.hasAxolotlsenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.ImageMessage.repeatedFields_ = [10,22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ImageMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ImageMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ImageMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ImageMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    caption: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    height: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    width: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    interactiveannotationsList: jspb.Message.toObjectList(msg.getInteractiveannotationsList(),
    proto.wa.InteractiveAnnotation.toObject, includeInstance),
    directpath: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f),
    firstscansidecar: msg.getFirstscansidecar_asB64(),
    firstscanlength: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    experimentgroupid: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    scanssidecar: msg.getScanssidecar_asB64(),
    scanlengthsList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    midqualityfilesha256: msg.getMidqualityfilesha256_asB64(),
    midqualityfileencsha256: msg.getMidqualityfileencsha256_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ImageMessage}
 */
proto.wa.ImageMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ImageMessage;
  return proto.wa.ImageMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ImageMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ImageMessage}
 */
proto.wa.ImageMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 10:
      var value = new proto.wa.InteractiveAnnotation;
      reader.readMessage(value,proto.wa.InteractiveAnnotation.deserializeBinaryFromReader);
      msg.addInteractiveannotations(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFirstscansidecar(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirstscanlength(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExperimentgroupid(value);
      break;
    case 21:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScanssidecar(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addScanlengths(value);
      break;
    case 23:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMidqualityfilesha256(value);
      break;
    case 24:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMidqualityfileencsha256(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ImageMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ImageMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ImageMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getInteractiveannotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.wa.InteractiveAnnotation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBytes(
      21,
      f
    );
  }
  f = message.getScanlengthsList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      22,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBytes(
      23,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeBytes(
      24,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string caption = 3;
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileSha256 = 4;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 fileLength = 5;
 * @return {number}
 */
proto.wa.ImageMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.wa.ImageMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 width = 7;
 * @return {number}
 */
proto.wa.ImageMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes mediaKey = 8;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes mediaKey = 8;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes fileEncSha256 = 9;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes fileEncSha256 = 9;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated InteractiveAnnotation interactiveAnnotations = 10;
 * @return {!Array<!proto.wa.InteractiveAnnotation>}
 */
proto.wa.ImageMessage.prototype.getInteractiveannotationsList = function() {
  return /** @type{!Array<!proto.wa.InteractiveAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.InteractiveAnnotation, 10));
};


/**
 * @param {!Array<!proto.wa.InteractiveAnnotation>} value
 * @return {!proto.wa.ImageMessage} returns this
*/
proto.wa.ImageMessage.prototype.setInteractiveannotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.wa.InteractiveAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.InteractiveAnnotation}
 */
proto.wa.ImageMessage.prototype.addInteractiveannotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.wa.InteractiveAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearInteractiveannotationsList = function() {
  return this.setInteractiveannotationsList([]);
};


/**
 * optional string directPath = 11;
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 12;
 * @return {number}
 */
proto.wa.ImageMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.ImageMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.ImageMessage} returns this
*/
proto.wa.ImageMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes firstScanSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getFirstscansidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes firstScanSidecar = 18;
 * This is a type-conversion wrapper around `getFirstscansidecar()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getFirstscansidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFirstscansidecar()));
};


/**
 * optional bytes firstScanSidecar = 18;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFirstscansidecar()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getFirstscansidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFirstscansidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setFirstscansidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearFirstscansidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasFirstscansidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint32 firstScanLength = 19;
 * @return {number}
 */
proto.wa.ImageMessage.prototype.getFirstscanlength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setFirstscanlength = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearFirstscanlength = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasFirstscanlength = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 experimentGroupId = 20;
 * @return {number}
 */
proto.wa.ImageMessage.prototype.getExperimentgroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setExperimentgroupid = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearExperimentgroupid = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasExperimentgroupid = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bytes scansSidecar = 21;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getScanssidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * optional bytes scansSidecar = 21;
 * This is a type-conversion wrapper around `getScanssidecar()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getScanssidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScanssidecar()));
};


/**
 * optional bytes scansSidecar = 21;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScanssidecar()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getScanssidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScanssidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setScanssidecar = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearScanssidecar = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasScanssidecar = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated uint32 scanLengths = 22;
 * @return {!Array<number>}
 */
proto.wa.ImageMessage.prototype.getScanlengthsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setScanlengthsList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.addScanlengths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearScanlengthsList = function() {
  return this.setScanlengthsList([]);
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getMidqualityfilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * This is a type-conversion wrapper around `getMidqualityfilesha256()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getMidqualityfilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMidqualityfilesha256()));
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMidqualityfilesha256()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getMidqualityfilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMidqualityfilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setMidqualityfilesha256 = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearMidqualityfilesha256 = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasMidqualityfilesha256 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ImageMessage.prototype.getMidqualityfileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * This is a type-conversion wrapper around `getMidqualityfileencsha256()`
 * @return {string}
 */
proto.wa.ImageMessage.prototype.getMidqualityfileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMidqualityfileencsha256()));
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMidqualityfileencsha256()`
 * @return {!Uint8Array}
 */
proto.wa.ImageMessage.prototype.getMidqualityfileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMidqualityfileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.setMidqualityfileencsha256 = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ImageMessage} returns this
 */
proto.wa.ImageMessage.prototype.clearMidqualityfileencsha256 = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ImageMessage.prototype.hasMidqualityfileencsha256 = function() {
  return jspb.Message.getField(this, 24) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ContactMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ContactMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ContactMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ContactMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    vcard: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ContactMessage}
 */
proto.wa.ContactMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ContactMessage;
  return proto.wa.ContactMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ContactMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ContactMessage}
 */
proto.wa.ContactMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setVcard(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ContactMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ContactMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ContactMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ContactMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.wa.ContactMessage.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ContactMessage} returns this
 */
proto.wa.ContactMessage.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContactMessage} returns this
 */
proto.wa.ContactMessage.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContactMessage.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string vcard = 16;
 * @return {string}
 */
proto.wa.ContactMessage.prototype.getVcard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ContactMessage} returns this
 */
proto.wa.ContactMessage.prototype.setVcard = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContactMessage} returns this
 */
proto.wa.ContactMessage.prototype.clearVcard = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContactMessage.prototype.hasVcard = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.ContactMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.ContactMessage} returns this
*/
proto.wa.ContactMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ContactMessage} returns this
 */
proto.wa.ContactMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContactMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.LocationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.LocationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.LocationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.LocationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    degreeslatitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    degreeslongitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    islive: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    accuracyinmeters: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    speedinmps: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    degreesclockwisefrommagneticnorth: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    comment: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.LocationMessage}
 */
proto.wa.LocationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.LocationMessage;
  return proto.wa.LocationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.LocationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.LocationMessage}
 */
proto.wa.LocationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslongitude(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslive(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccuracyinmeters(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeedinmps(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDegreesclockwisefrommagneticnorth(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.LocationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.LocationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.LocationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.LocationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.wa.LocationMessage.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.wa.LocationMessage.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.wa.LocationMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.wa.LocationMessage.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.wa.LocationMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool isLive = 6;
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.getIslive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setIslive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearIslive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasIslive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 accuracyInMeters = 7;
 * @return {number}
 */
proto.wa.LocationMessage.prototype.getAccuracyinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setAccuracyinmeters = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearAccuracyinmeters = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasAccuracyinmeters = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional float speedInMps = 8;
 * @return {number}
 */
proto.wa.LocationMessage.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setSpeedinmps = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearSpeedinmps = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasSpeedinmps = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 degreesClockwiseFromMagneticNorth = 9;
 * @return {number}
 */
proto.wa.LocationMessage.prototype.getDegreesclockwisefrommagneticnorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setDegreesclockwisefrommagneticnorth = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string comment = 11;
 * @return {string}
 */
proto.wa.LocationMessage.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearComment = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasComment = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.LocationMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.LocationMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.LocationMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.LocationMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.LocationMessage} returns this
*/
proto.wa.LocationMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.LocationMessage} returns this
 */
proto.wa.LocationMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LocationMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ExtendedTextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ExtendedTextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ExtendedTextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ExtendedTextMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    matchedtext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canonicalurl: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    textargb: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    backgroundargb: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    font: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    previewtype: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f),
    donotplayinline: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ExtendedTextMessage}
 */
proto.wa.ExtendedTextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ExtendedTextMessage;
  return proto.wa.ExtendedTextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ExtendedTextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ExtendedTextMessage}
 */
proto.wa.ExtendedTextMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchedtext(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCanonicalurl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setTextargb(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setBackgroundargb(value);
      break;
    case 9:
      var value = /** @type {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (reader.readEnum());
      msg.setFont(value);
      break;
    case 10:
      var value = /** @type {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (reader.readEnum());
      msg.setPreviewtype(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDonotplayinline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ExtendedTextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ExtendedTextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ExtendedTextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ExtendedTextMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeFixed32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFixed32(
      8,
      f
    );
  }
  f = /** @type {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE = {
  SANS_SERIF: 0,
  SERIF: 1,
  NORICAN_REGULAR: 2,
  BRYNDAN_WRITE: 3,
  BEBASNEUE_REGULAR: 4,
  OSWALD_HEAVY: 5
};

/**
 * @enum {number}
 */
proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE = {
  NONE: 0,
  VIDEO: 1
};

/**
 * optional string text = 1;
 * @return {string}
 */
proto.wa.ExtendedTextMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setText = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearText = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string matchedText = 2;
 * @return {string}
 */
proto.wa.ExtendedTextMessage.prototype.getMatchedtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setMatchedtext = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearMatchedtext = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasMatchedtext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string canonicalUrl = 4;
 * @return {string}
 */
proto.wa.ExtendedTextMessage.prototype.getCanonicalurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setCanonicalurl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearCanonicalurl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasCanonicalurl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.wa.ExtendedTextMessage.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.wa.ExtendedTextMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional fixed32 textArgb = 7;
 * @return {number}
 */
proto.wa.ExtendedTextMessage.prototype.getTextargb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setTextargb = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearTextargb = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasTextargb = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional fixed32 backgroundArgb = 8;
 * @return {number}
 */
proto.wa.ExtendedTextMessage.prototype.getBackgroundargb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setBackgroundargb = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearBackgroundargb = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasBackgroundargb = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional EXTENDED_TEXT_MESSAGE_FONTTYPE font = 9;
 * @return {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE}
 */
proto.wa.ExtendedTextMessage.prototype.getFont = function() {
  return /** @type {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setFont = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearFont = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasFont = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional EXTENDED_TEXT_MESSAGE_PREVIEWTYPE previewType = 10;
 * @return {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE}
 */
proto.wa.ExtendedTextMessage.prototype.getPreviewtype = function() {
  return /** @type {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.wa.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setPreviewtype = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearPreviewtype = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasPreviewtype = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.ExtendedTextMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.ExtendedTextMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.ExtendedTextMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.ExtendedTextMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
*/
proto.wa.ExtendedTextMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool doNotPlayInline = 18;
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.getDonotplayinline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.setDonotplayinline = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ExtendedTextMessage} returns this
 */
proto.wa.ExtendedTextMessage.prototype.clearDonotplayinline = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ExtendedTextMessage.prototype.hasDonotplayinline = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.DocumentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.DocumentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.DocumentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.DocumentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    pagecount: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    filename: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    fileencsha256: msg.getFileencsha256_asB64(),
    directpath: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.DocumentMessage}
 */
proto.wa.DocumentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.DocumentMessage;
  return proto.wa.DocumentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.DocumentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.DocumentMessage}
 */
proto.wa.DocumentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPagecount(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.DocumentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.DocumentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.DocumentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.DocumentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.wa.DocumentMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileSha256 = 4;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.wa.DocumentMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 fileLength = 5;
 * @return {number}
 */
proto.wa.DocumentMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 pageCount = 6;
 * @return {number}
 */
proto.wa.DocumentMessage.prototype.getPagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setPagecount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearPagecount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasPagecount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes mediaKey = 7;
 * @return {!(string|Uint8Array)}
 */
proto.wa.DocumentMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes mediaKey = 7;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.wa.DocumentMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string fileName = 8;
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setFilename = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearFilename = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasFilename = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes fileEncSha256 = 9;
 * @return {!(string|Uint8Array)}
 */
proto.wa.DocumentMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes fileEncSha256 = 9;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.wa.DocumentMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string directPath = 10;
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 11;
 * @return {number}
 */
proto.wa.DocumentMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.DocumentMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.DocumentMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.DocumentMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.DocumentMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.DocumentMessage} returns this
*/
proto.wa.DocumentMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.DocumentMessage} returns this
 */
proto.wa.DocumentMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DocumentMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.AudioMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.AudioMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.AudioMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.AudioMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    seconds: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    ptt: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    directpath: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f),
    streamingsidecar: msg.getStreamingsidecar_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.AudioMessage}
 */
proto.wa.AudioMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.AudioMessage;
  return proto.wa.AudioMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.AudioMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.AudioMessage}
 */
proto.wa.AudioMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeconds(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPtt(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStreamingsidecar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.AudioMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.AudioMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.AudioMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.AudioMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.wa.AudioMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.wa.AudioMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.wa.AudioMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileSha256 = 3;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.wa.AudioMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.wa.AudioMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 fileLength = 4;
 * @return {number}
 */
proto.wa.AudioMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 seconds = 5;
 * @return {number}
 */
proto.wa.AudioMessage.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool ptt = 6;
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.getPtt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setPtt = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearPtt = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasPtt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes mediaKey = 7;
 * @return {!(string|Uint8Array)}
 */
proto.wa.AudioMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes mediaKey = 7;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.wa.AudioMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.wa.AudioMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes fileEncSha256 = 8;
 * @return {!(string|Uint8Array)}
 */
proto.wa.AudioMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes fileEncSha256 = 8;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.wa.AudioMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.wa.AudioMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string directPath = 9;
 * @return {string}
 */
proto.wa.AudioMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 10;
 * @return {number}
 */
proto.wa.AudioMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.AudioMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.AudioMessage} returns this
*/
proto.wa.AudioMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes streamingSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.wa.AudioMessage.prototype.getStreamingsidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes streamingSidecar = 18;
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {string}
 */
proto.wa.AudioMessage.prototype.getStreamingsidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStreamingsidecar()));
};


/**
 * optional bytes streamingSidecar = 18;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {!Uint8Array}
 */
proto.wa.AudioMessage.prototype.getStreamingsidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStreamingsidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.setStreamingsidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.AudioMessage} returns this
 */
proto.wa.AudioMessage.prototype.clearStreamingsidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.AudioMessage.prototype.hasStreamingsidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.VideoMessage.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.VideoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.VideoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.VideoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.VideoMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    seconds: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    caption: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    gifplayback: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    height: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    width: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    fileencsha256: msg.getFileencsha256_asB64(),
    interactiveannotationsList: jspb.Message.toObjectList(msg.getInteractiveannotationsList(),
    proto.wa.InteractiveAnnotation.toObject, includeInstance),
    directpath: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f),
    streamingsidecar: msg.getStreamingsidecar_asB64(),
    gifattribution: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.VideoMessage}
 */
proto.wa.VideoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.VideoMessage;
  return proto.wa.VideoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.VideoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.VideoMessage}
 */
proto.wa.VideoMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeconds(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGifplayback(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 12:
      var value = new proto.wa.InteractiveAnnotation;
      reader.readMessage(value,proto.wa.InteractiveAnnotation.deserializeBinaryFromReader);
      msg.addInteractiveannotations(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStreamingsidecar(value);
      break;
    case 19:
      var value = /** @type {!proto.wa.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (reader.readEnum());
      msg.setGifattribution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.VideoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.VideoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.VideoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.VideoMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBytes(
      11,
      f
    );
  }
  f = message.getInteractiveannotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.wa.InteractiveAnnotation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
  f = /** @type {!proto.wa.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION = {
  NONE: 0,
  GIPHY: 1,
  TENOR: 2
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.wa.VideoMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileSha256 = 3;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.wa.VideoMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 fileLength = 4;
 * @return {number}
 */
proto.wa.VideoMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 seconds = 5;
 * @return {number}
 */
proto.wa.VideoMessage.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes mediaKey = 6;
 * @return {!(string|Uint8Array)}
 */
proto.wa.VideoMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes mediaKey = 6;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.wa.VideoMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string caption = 7;
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool gifPlayback = 8;
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.getGifplayback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setGifplayback = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearGifplayback = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasGifplayback = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 height = 9;
 * @return {number}
 */
proto.wa.VideoMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 width = 10;
 * @return {number}
 */
proto.wa.VideoMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bytes fileEncSha256 = 11;
 * @return {!(string|Uint8Array)}
 */
proto.wa.VideoMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes fileEncSha256 = 11;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.wa.VideoMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated InteractiveAnnotation interactiveAnnotations = 12;
 * @return {!Array<!proto.wa.InteractiveAnnotation>}
 */
proto.wa.VideoMessage.prototype.getInteractiveannotationsList = function() {
  return /** @type{!Array<!proto.wa.InteractiveAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.InteractiveAnnotation, 12));
};


/**
 * @param {!Array<!proto.wa.InteractiveAnnotation>} value
 * @return {!proto.wa.VideoMessage} returns this
*/
proto.wa.VideoMessage.prototype.setInteractiveannotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.wa.InteractiveAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.InteractiveAnnotation}
 */
proto.wa.VideoMessage.prototype.addInteractiveannotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.wa.InteractiveAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearInteractiveannotationsList = function() {
  return this.setInteractiveannotationsList([]);
};


/**
 * optional string directPath = 13;
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 14;
 * @return {number}
 */
proto.wa.VideoMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.VideoMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.VideoMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.VideoMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.VideoMessage} returns this
*/
proto.wa.VideoMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes streamingSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.wa.VideoMessage.prototype.getStreamingsidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes streamingSidecar = 18;
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {string}
 */
proto.wa.VideoMessage.prototype.getStreamingsidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStreamingsidecar()));
};


/**
 * optional bytes streamingSidecar = 18;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {!Uint8Array}
 */
proto.wa.VideoMessage.prototype.getStreamingsidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStreamingsidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setStreamingsidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearStreamingsidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasStreamingsidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional VIDEO_MESSAGE_ATTRIBUTION gifAttribution = 19;
 * @return {!proto.wa.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION}
 */
proto.wa.VideoMessage.prototype.getGifattribution = function() {
  return /** @type {!proto.wa.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.wa.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} value
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.setGifattribution = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.VideoMessage} returns this
 */
proto.wa.VideoMessage.prototype.clearGifattribution = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.VideoMessage.prototype.hasGifattribution = function() {
  return jspb.Message.getField(this, 19) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.Call.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.Call.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.Call} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Call.toObject = function(includeInstance, msg) {
  var f, obj = {
    callkey: msg.getCallkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.Call}
 */
proto.wa.Call.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.Call;
  return proto.wa.Call.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.Call} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.Call}
 */
proto.wa.Call.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCallkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.Call.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.Call.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.Call} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Call.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes callKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.wa.Call.prototype.getCallkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes callKey = 1;
 * This is a type-conversion wrapper around `getCallkey()`
 * @return {string}
 */
proto.wa.Call.prototype.getCallkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCallkey()));
};


/**
 * optional bytes callKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCallkey()`
 * @return {!Uint8Array}
 */
proto.wa.Call.prototype.getCallkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCallkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.Call} returns this
 */
proto.wa.Call.prototype.setCallkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Call} returns this
 */
proto.wa.Call.prototype.clearCallkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Call.prototype.hasCallkey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.Chat.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.Chat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.Chat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Chat.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.Chat}
 */
proto.wa.Chat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.Chat;
  return proto.wa.Chat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.Chat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.Chat}
 */
proto.wa.Chat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.Chat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.Chat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.Chat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Chat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.wa.Chat.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.Chat} returns this
 */
proto.wa.Chat.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Chat} returns this
 */
proto.wa.Chat.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Chat.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.wa.Chat.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.Chat} returns this
 */
proto.wa.Chat.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Chat} returns this
 */
proto.wa.Chat.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Chat.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ProtocolMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ProtocolMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ProtocolMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ProtocolMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.wa.MessageKey.toObject(includeInstance, f),
    type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ephemeralexpiration: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    ephemeralsettingtimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    historysyncnotification: (f = msg.getHistorysyncnotification()) && proto.wa.HistorySyncNotification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ProtocolMessage}
 */
proto.wa.ProtocolMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ProtocolMessage;
  return proto.wa.ProtocolMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ProtocolMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ProtocolMessage}
 */
proto.wa.ProtocolMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.wa.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEphemeralexpiration(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEphemeralsettingtimestamp(value);
      break;
    case 6:
      var value = new proto.wa.HistorySyncNotification;
      reader.readMessage(value,proto.wa.HistorySyncNotification.deserializeBinaryFromReader);
      msg.setHistorysyncnotification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ProtocolMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ProtocolMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ProtocolMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ProtocolMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.wa.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getHistorysyncnotification();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wa.HistorySyncNotification.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.ProtocolMessage.PROTOCOL_MESSAGE_TYPE = {
  REVOKE: 0,
  EPHEMERAL_SETTING: 3,
  EPHEMERAL_SYNC_RESPONSE: 4,
  HISTORY_SYNC_NOTIFICATION: 5
};

/**
 * optional MessageKey key = 1;
 * @return {?proto.wa.MessageKey}
 */
proto.wa.ProtocolMessage.prototype.getKey = function() {
  return /** @type{?proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 1));
};


/**
 * @param {?proto.wa.MessageKey|undefined} value
 * @return {!proto.wa.ProtocolMessage} returns this
*/
proto.wa.ProtocolMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProtocolMessage.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PROTOCOL_MESSAGE_TYPE type = 2;
 * @return {!proto.wa.ProtocolMessage.PROTOCOL_MESSAGE_TYPE}
 */
proto.wa.ProtocolMessage.prototype.getType = function() {
  return /** @type {!proto.wa.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.wa.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} value
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProtocolMessage.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 ephemeralExpiration = 4;
 * @return {number}
 */
proto.wa.ProtocolMessage.prototype.getEphemeralexpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.setEphemeralexpiration = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.clearEphemeralexpiration = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProtocolMessage.prototype.hasEphemeralexpiration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 ephemeralSettingTimestamp = 5;
 * @return {number}
 */
proto.wa.ProtocolMessage.prototype.getEphemeralsettingtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.setEphemeralsettingtimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.clearEphemeralsettingtimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProtocolMessage.prototype.hasEphemeralsettingtimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HistorySyncNotification historySyncNotification = 6;
 * @return {?proto.wa.HistorySyncNotification}
 */
proto.wa.ProtocolMessage.prototype.getHistorysyncnotification = function() {
  return /** @type{?proto.wa.HistorySyncNotification} */ (
    jspb.Message.getWrapperField(this, proto.wa.HistorySyncNotification, 6));
};


/**
 * @param {?proto.wa.HistorySyncNotification|undefined} value
 * @return {!proto.wa.ProtocolMessage} returns this
*/
proto.wa.ProtocolMessage.prototype.setHistorysyncnotification = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ProtocolMessage} returns this
 */
proto.wa.ProtocolMessage.prototype.clearHistorysyncnotification = function() {
  return this.setHistorysyncnotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProtocolMessage.prototype.hasHistorysyncnotification = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HistorySyncNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HistorySyncNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HistorySyncNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HistorySyncNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    directpath: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    synctype: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    chunkorder: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    originalmessageid: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HistorySyncNotification}
 */
proto.wa.HistorySyncNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HistorySyncNotification;
  return proto.wa.HistorySyncNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HistorySyncNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HistorySyncNotification}
 */
proto.wa.HistorySyncNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 6:
      var value = /** @type {!proto.wa.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (reader.readEnum());
      msg.setSynctype(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChunkorder(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalmessageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HistorySyncNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HistorySyncNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HistorySyncNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HistorySyncNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!proto.wa.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE = {
  INITIAL_BOOTSTRAP: 0,
  INITIAL_STATUS_V3: 1,
  FULL: 2,
  RECENT: 3,
  RESEND: 4
};

/**
 * optional bytes fileSha256 = 1;
 * @return {!(string|Uint8Array)}
 */
proto.wa.HistorySyncNotification.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes fileSha256 = 1;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.wa.HistorySyncNotification.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.wa.HistorySyncNotification.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 fileLength = 2;
 * @return {number}
 */
proto.wa.HistorySyncNotification.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes mediaKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.wa.HistorySyncNotification.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes mediaKey = 3;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.wa.HistorySyncNotification.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.wa.HistorySyncNotification.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileEncSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.wa.HistorySyncNotification.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileEncSha256 = 4;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.wa.HistorySyncNotification.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.wa.HistorySyncNotification.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string directPath = 5;
 * @return {string}
 */
proto.wa.HistorySyncNotification.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE syncType = 6;
 * @return {!proto.wa.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE}
 */
proto.wa.HistorySyncNotification.prototype.getSynctype = function() {
  return /** @type {!proto.wa.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.wa.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setSynctype = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearSynctype = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasSynctype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 chunkOrder = 7;
 * @return {number}
 */
proto.wa.HistorySyncNotification.prototype.getChunkorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setChunkorder = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearChunkorder = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasChunkorder = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string originalMessageId = 8;
 * @return {string}
 */
proto.wa.HistorySyncNotification.prototype.getOriginalmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.setOriginalmessageid = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HistorySyncNotification} returns this
 */
proto.wa.HistorySyncNotification.prototype.clearOriginalmessageid = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HistorySyncNotification.prototype.hasOriginalmessageid = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.ContactsArrayMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ContactsArrayMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ContactsArrayMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ContactsArrayMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ContactsArrayMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    contactsList: jspb.Message.toObjectList(msg.getContactsList(),
    proto.wa.ContactMessage.toObject, includeInstance),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ContactsArrayMessage}
 */
proto.wa.ContactsArrayMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ContactsArrayMessage;
  return proto.wa.ContactsArrayMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ContactsArrayMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ContactsArrayMessage}
 */
proto.wa.ContactsArrayMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 2:
      var value = new proto.wa.ContactMessage;
      reader.readMessage(value,proto.wa.ContactMessage.deserializeBinaryFromReader);
      msg.addContacts(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ContactsArrayMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ContactsArrayMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ContactsArrayMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ContactsArrayMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.wa.ContactMessage.serializeBinaryToWriter
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.wa.ContactsArrayMessage.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ContactsArrayMessage} returns this
 */
proto.wa.ContactsArrayMessage.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ContactsArrayMessage} returns this
 */
proto.wa.ContactsArrayMessage.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContactsArrayMessage.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ContactMessage contacts = 2;
 * @return {!Array<!proto.wa.ContactMessage>}
 */
proto.wa.ContactsArrayMessage.prototype.getContactsList = function() {
  return /** @type{!Array<!proto.wa.ContactMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.ContactMessage, 2));
};


/**
 * @param {!Array<!proto.wa.ContactMessage>} value
 * @return {!proto.wa.ContactsArrayMessage} returns this
*/
proto.wa.ContactsArrayMessage.prototype.setContactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.wa.ContactMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.ContactMessage}
 */
proto.wa.ContactsArrayMessage.prototype.addContacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.wa.ContactMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.ContactsArrayMessage} returns this
 */
proto.wa.ContactsArrayMessage.prototype.clearContactsList = function() {
  return this.setContactsList([]);
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.ContactsArrayMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.ContactsArrayMessage} returns this
*/
proto.wa.ContactsArrayMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ContactsArrayMessage} returns this
 */
proto.wa.ContactsArrayMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ContactsArrayMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HSMCurrency.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HSMCurrency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HSMCurrency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMCurrency.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencycode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount1000: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HSMCurrency}
 */
proto.wa.HSMCurrency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HSMCurrency;
  return proto.wa.HSMCurrency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HSMCurrency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HSMCurrency}
 */
proto.wa.HSMCurrency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount1000(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HSMCurrency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HSMCurrency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HSMCurrency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMCurrency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string currencyCode = 1;
 * @return {string}
 */
proto.wa.HSMCurrency.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HSMCurrency} returns this
 */
proto.wa.HSMCurrency.prototype.setCurrencycode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMCurrency} returns this
 */
proto.wa.HSMCurrency.prototype.clearCurrencycode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMCurrency.prototype.hasCurrencycode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 amount1000 = 2;
 * @return {number}
 */
proto.wa.HSMCurrency.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HSMCurrency} returns this
 */
proto.wa.HSMCurrency.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMCurrency} returns this
 */
proto.wa.HSMCurrency.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMCurrency.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HSMDateTimeComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HSMDateTimeComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HSMDateTimeComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMDateTimeComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
    dayofweek: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    year: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    month: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    dayofmonth: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    hour: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    minute: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    calendar: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HSMDateTimeComponent}
 */
proto.wa.HSMDateTimeComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HSMDateTimeComponent;
  return proto.wa.HSMDateTimeComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HSMDateTimeComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HSMDateTimeComponent}
 */
proto.wa.HSMDateTimeComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (reader.readEnum());
      msg.setDayofweek(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setYear(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMonth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDayofmonth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHour(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinute(value);
      break;
    case 7:
      var value = /** @type {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (reader.readEnum());
      msg.setCalendar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HSMDateTimeComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HSMDateTimeComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HSMDateTimeComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMDateTimeComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7
};

/**
 * @enum {number}
 */
proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE = {
  GREGORIAN: 1,
  SOLAR_HIJRI: 2
};

/**
 * optional HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE dayOfWeek = 1;
 * @return {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE}
 */
proto.wa.HSMDateTimeComponent.prototype.getDayofweek = function() {
  return /** @type {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} value
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.setDayofweek = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.clearDayofweek = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeComponent.prototype.hasDayofweek = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 year = 2;
 * @return {number}
 */
proto.wa.HSMDateTimeComponent.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.setYear = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.clearYear = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeComponent.prototype.hasYear = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 month = 3;
 * @return {number}
 */
proto.wa.HSMDateTimeComponent.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.setMonth = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.clearMonth = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeComponent.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 dayOfMonth = 4;
 * @return {number}
 */
proto.wa.HSMDateTimeComponent.prototype.getDayofmonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.setDayofmonth = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.clearDayofmonth = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeComponent.prototype.hasDayofmonth = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 hour = 5;
 * @return {number}
 */
proto.wa.HSMDateTimeComponent.prototype.getHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.setHour = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.clearHour = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeComponent.prototype.hasHour = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 minute = 6;
 * @return {number}
 */
proto.wa.HSMDateTimeComponent.prototype.getMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.setMinute = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.clearMinute = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeComponent.prototype.hasMinute = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional HSM_DATE_TIME_COMPONENT_CALENDARTYPE calendar = 7;
 * @return {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE}
 */
proto.wa.HSMDateTimeComponent.prototype.getCalendar = function() {
  return /** @type {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (jspb.Message.getFieldWithDefault(this, 7, 1));
};


/**
 * @param {!proto.wa.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} value
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.setCalendar = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeComponent} returns this
 */
proto.wa.HSMDateTimeComponent.prototype.clearCalendar = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeComponent.prototype.hasCalendar = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HSMDateTimeUnixEpoch.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HSMDateTimeUnixEpoch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HSMDateTimeUnixEpoch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMDateTimeUnixEpoch.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HSMDateTimeUnixEpoch}
 */
proto.wa.HSMDateTimeUnixEpoch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HSMDateTimeUnixEpoch;
  return proto.wa.HSMDateTimeUnixEpoch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HSMDateTimeUnixEpoch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HSMDateTimeUnixEpoch}
 */
proto.wa.HSMDateTimeUnixEpoch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HSMDateTimeUnixEpoch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HSMDateTimeUnixEpoch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HSMDateTimeUnixEpoch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMDateTimeUnixEpoch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.wa.HSMDateTimeUnixEpoch.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.HSMDateTimeUnixEpoch} returns this
 */
proto.wa.HSMDateTimeUnixEpoch.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMDateTimeUnixEpoch} returns this
 */
proto.wa.HSMDateTimeUnixEpoch.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTimeUnixEpoch.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.HSMDateTime.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.wa.HSMDateTime.DatetimeoneofCase = {
  DATETIMEONEOF_NOT_SET: 0,
  COMPONENT: 1,
  UNIXEPOCH: 2
};

/**
 * @return {proto.wa.HSMDateTime.DatetimeoneofCase}
 */
proto.wa.HSMDateTime.prototype.getDatetimeoneofCase = function() {
  return /** @type {proto.wa.HSMDateTime.DatetimeoneofCase} */(jspb.Message.computeOneofCase(this, proto.wa.HSMDateTime.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HSMDateTime.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HSMDateTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HSMDateTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMDateTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    component: (f = msg.getComponent()) && proto.wa.HSMDateTimeComponent.toObject(includeInstance, f),
    unixepoch: (f = msg.getUnixepoch()) && proto.wa.HSMDateTimeUnixEpoch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HSMDateTime}
 */
proto.wa.HSMDateTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HSMDateTime;
  return proto.wa.HSMDateTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HSMDateTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HSMDateTime}
 */
proto.wa.HSMDateTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.HSMDateTimeComponent;
      reader.readMessage(value,proto.wa.HSMDateTimeComponent.deserializeBinaryFromReader);
      msg.setComponent(value);
      break;
    case 2:
      var value = new proto.wa.HSMDateTimeUnixEpoch;
      reader.readMessage(value,proto.wa.HSMDateTimeUnixEpoch.deserializeBinaryFromReader);
      msg.setUnixepoch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HSMDateTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HSMDateTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HSMDateTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMDateTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.HSMDateTimeComponent.serializeBinaryToWriter
    );
  }
  f = message.getUnixepoch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.HSMDateTimeUnixEpoch.serializeBinaryToWriter
    );
  }
};


/**
 * optional HSMDateTimeComponent component = 1;
 * @return {?proto.wa.HSMDateTimeComponent}
 */
proto.wa.HSMDateTime.prototype.getComponent = function() {
  return /** @type{?proto.wa.HSMDateTimeComponent} */ (
    jspb.Message.getWrapperField(this, proto.wa.HSMDateTimeComponent, 1));
};


/**
 * @param {?proto.wa.HSMDateTimeComponent|undefined} value
 * @return {!proto.wa.HSMDateTime} returns this
*/
proto.wa.HSMDateTime.prototype.setComponent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wa.HSMDateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HSMDateTime} returns this
 */
proto.wa.HSMDateTime.prototype.clearComponent = function() {
  return this.setComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTime.prototype.hasComponent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HSMDateTimeUnixEpoch unixEpoch = 2;
 * @return {?proto.wa.HSMDateTimeUnixEpoch}
 */
proto.wa.HSMDateTime.prototype.getUnixepoch = function() {
  return /** @type{?proto.wa.HSMDateTimeUnixEpoch} */ (
    jspb.Message.getWrapperField(this, proto.wa.HSMDateTimeUnixEpoch, 2));
};


/**
 * @param {?proto.wa.HSMDateTimeUnixEpoch|undefined} value
 * @return {!proto.wa.HSMDateTime} returns this
*/
proto.wa.HSMDateTime.prototype.setUnixepoch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wa.HSMDateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HSMDateTime} returns this
 */
proto.wa.HSMDateTime.prototype.clearUnixepoch = function() {
  return this.setUnixepoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMDateTime.prototype.hasUnixepoch = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.HSMLocalizableParameter.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.wa.HSMLocalizableParameter.ParamoneofCase = {
  PARAMONEOF_NOT_SET: 0,
  CURRENCY: 2,
  DATETIME: 3
};

/**
 * @return {proto.wa.HSMLocalizableParameter.ParamoneofCase}
 */
proto.wa.HSMLocalizableParameter.prototype.getParamoneofCase = function() {
  return /** @type {proto.wa.HSMLocalizableParameter.ParamoneofCase} */(jspb.Message.computeOneofCase(this, proto.wa.HSMLocalizableParameter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HSMLocalizableParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HSMLocalizableParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HSMLocalizableParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMLocalizableParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_default: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    currency: (f = msg.getCurrency()) && proto.wa.HSMCurrency.toObject(includeInstance, f),
    datetime: (f = msg.getDatetime()) && proto.wa.HSMDateTime.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HSMLocalizableParameter}
 */
proto.wa.HSMLocalizableParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HSMLocalizableParameter;
  return proto.wa.HSMLocalizableParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HSMLocalizableParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HSMLocalizableParameter}
 */
proto.wa.HSMLocalizableParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefault(value);
      break;
    case 2:
      var value = new proto.wa.HSMCurrency;
      reader.readMessage(value,proto.wa.HSMCurrency.deserializeBinaryFromReader);
      msg.setCurrency(value);
      break;
    case 3:
      var value = new proto.wa.HSMDateTime;
      reader.readMessage(value,proto.wa.HSMDateTime.deserializeBinaryFromReader);
      msg.setDatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HSMLocalizableParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HSMLocalizableParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HSMLocalizableParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HSMLocalizableParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrency();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.HSMCurrency.serializeBinaryToWriter
    );
  }
  f = message.getDatetime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.HSMDateTime.serializeBinaryToWriter
    );
  }
};


/**
 * optional string default = 1;
 * @return {string}
 */
proto.wa.HSMLocalizableParameter.prototype.getDefault = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HSMLocalizableParameter} returns this
 */
proto.wa.HSMLocalizableParameter.prototype.setDefault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HSMLocalizableParameter} returns this
 */
proto.wa.HSMLocalizableParameter.prototype.clearDefault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMLocalizableParameter.prototype.hasDefault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HSMCurrency currency = 2;
 * @return {?proto.wa.HSMCurrency}
 */
proto.wa.HSMLocalizableParameter.prototype.getCurrency = function() {
  return /** @type{?proto.wa.HSMCurrency} */ (
    jspb.Message.getWrapperField(this, proto.wa.HSMCurrency, 2));
};


/**
 * @param {?proto.wa.HSMCurrency|undefined} value
 * @return {!proto.wa.HSMLocalizableParameter} returns this
*/
proto.wa.HSMLocalizableParameter.prototype.setCurrency = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wa.HSMLocalizableParameter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HSMLocalizableParameter} returns this
 */
proto.wa.HSMLocalizableParameter.prototype.clearCurrency = function() {
  return this.setCurrency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMLocalizableParameter.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HSMDateTime dateTime = 3;
 * @return {?proto.wa.HSMDateTime}
 */
proto.wa.HSMLocalizableParameter.prototype.getDatetime = function() {
  return /** @type{?proto.wa.HSMDateTime} */ (
    jspb.Message.getWrapperField(this, proto.wa.HSMDateTime, 3));
};


/**
 * @param {?proto.wa.HSMDateTime|undefined} value
 * @return {!proto.wa.HSMLocalizableParameter} returns this
*/
proto.wa.HSMLocalizableParameter.prototype.setDatetime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.wa.HSMLocalizableParameter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HSMLocalizableParameter} returns this
 */
proto.wa.HSMLocalizableParameter.prototype.clearDatetime = function() {
  return this.setDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HSMLocalizableParameter.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.HighlyStructuredMessage.repeatedFields_ = [3,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HighlyStructuredMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HighlyStructuredMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HighlyStructuredMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HighlyStructuredMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    elementname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    paramsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    fallbacklg: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    fallbacklc: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    localizableparamsList: jspb.Message.toObjectList(msg.getLocalizableparamsList(),
    proto.wa.HSMLocalizableParameter.toObject, includeInstance),
    deterministiclg: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    deterministiclc: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    hydratedhsm: (f = msg.getHydratedhsm()) && proto.wa.TemplateMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HighlyStructuredMessage}
 */
proto.wa.HighlyStructuredMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HighlyStructuredMessage;
  return proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HighlyStructuredMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HighlyStructuredMessage}
 */
proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addParams(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFallbacklg(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFallbacklc(value);
      break;
    case 6:
      var value = new proto.wa.HSMLocalizableParameter;
      reader.readMessage(value,proto.wa.HSMLocalizableParameter.deserializeBinaryFromReader);
      msg.addLocalizableparams(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeterministiclg(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeterministiclc(value);
      break;
    case 9:
      var value = new proto.wa.TemplateMessage;
      reader.readMessage(value,proto.wa.TemplateMessage.deserializeBinaryFromReader);
      msg.setHydratedhsm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HighlyStructuredMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HighlyStructuredMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HighlyStructuredMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HighlyStructuredMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocalizableparamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.wa.HSMLocalizableParameter.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getHydratedhsm();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.wa.TemplateMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.wa.HighlyStructuredMessage.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.setNamespace = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearNamespace = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HighlyStructuredMessage.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string elementName = 2;
 * @return {string}
 */
proto.wa.HighlyStructuredMessage.prototype.getElementname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.setElementname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearElementname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HighlyStructuredMessage.prototype.hasElementname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string params = 3;
 * @return {!Array<string>}
 */
proto.wa.HighlyStructuredMessage.prototype.getParamsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.setParamsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.addParams = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional string fallbackLg = 4;
 * @return {string}
 */
proto.wa.HighlyStructuredMessage.prototype.getFallbacklg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.setFallbacklg = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearFallbacklg = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HighlyStructuredMessage.prototype.hasFallbacklg = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string fallbackLc = 5;
 * @return {string}
 */
proto.wa.HighlyStructuredMessage.prototype.getFallbacklc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.setFallbacklc = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearFallbacklc = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HighlyStructuredMessage.prototype.hasFallbacklc = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated HSMLocalizableParameter localizableParams = 6;
 * @return {!Array<!proto.wa.HSMLocalizableParameter>}
 */
proto.wa.HighlyStructuredMessage.prototype.getLocalizableparamsList = function() {
  return /** @type{!Array<!proto.wa.HSMLocalizableParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.HSMLocalizableParameter, 6));
};


/**
 * @param {!Array<!proto.wa.HSMLocalizableParameter>} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
*/
proto.wa.HighlyStructuredMessage.prototype.setLocalizableparamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.wa.HSMLocalizableParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.HSMLocalizableParameter}
 */
proto.wa.HighlyStructuredMessage.prototype.addLocalizableparams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.wa.HSMLocalizableParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearLocalizableparamsList = function() {
  return this.setLocalizableparamsList([]);
};


/**
 * optional string deterministicLg = 7;
 * @return {string}
 */
proto.wa.HighlyStructuredMessage.prototype.getDeterministiclg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.setDeterministiclg = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearDeterministiclg = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HighlyStructuredMessage.prototype.hasDeterministiclg = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string deterministicLc = 8;
 * @return {string}
 */
proto.wa.HighlyStructuredMessage.prototype.getDeterministiclc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.setDeterministiclc = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearDeterministiclc = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HighlyStructuredMessage.prototype.hasDeterministiclc = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TemplateMessage hydratedHsm = 9;
 * @return {?proto.wa.TemplateMessage}
 */
proto.wa.HighlyStructuredMessage.prototype.getHydratedhsm = function() {
  return /** @type{?proto.wa.TemplateMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.TemplateMessage, 9));
};


/**
 * @param {?proto.wa.TemplateMessage|undefined} value
 * @return {!proto.wa.HighlyStructuredMessage} returns this
*/
proto.wa.HighlyStructuredMessage.prototype.setHydratedhsm = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HighlyStructuredMessage} returns this
 */
proto.wa.HighlyStructuredMessage.prototype.clearHydratedhsm = function() {
  return this.setHydratedhsm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HighlyStructuredMessage.prototype.hasHydratedhsm = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.SendPaymentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.SendPaymentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.SendPaymentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.SendPaymentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    notemessage: (f = msg.getNotemessage()) && proto.wa.Message.toObject(includeInstance, f),
    requestmessagekey: (f = msg.getRequestmessagekey()) && proto.wa.MessageKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.SendPaymentMessage}
 */
proto.wa.SendPaymentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.SendPaymentMessage;
  return proto.wa.SendPaymentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.SendPaymentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.SendPaymentMessage}
 */
proto.wa.SendPaymentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.wa.Message;
      reader.readMessage(value,proto.wa.Message.deserializeBinaryFromReader);
      msg.setNotemessage(value);
      break;
    case 3:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setRequestmessagekey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.SendPaymentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.SendPaymentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.SendPaymentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.SendPaymentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotemessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.Message.serializeBinaryToWriter
    );
  }
  f = message.getRequestmessagekey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message noteMessage = 2;
 * @return {?proto.wa.Message}
 */
proto.wa.SendPaymentMessage.prototype.getNotemessage = function() {
  return /** @type{?proto.wa.Message} */ (
    jspb.Message.getWrapperField(this, proto.wa.Message, 2));
};


/**
 * @param {?proto.wa.Message|undefined} value
 * @return {!proto.wa.SendPaymentMessage} returns this
*/
proto.wa.SendPaymentMessage.prototype.setNotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.SendPaymentMessage} returns this
 */
proto.wa.SendPaymentMessage.prototype.clearNotemessage = function() {
  return this.setNotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.SendPaymentMessage.prototype.hasNotemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageKey requestMessageKey = 3;
 * @return {?proto.wa.MessageKey}
 */
proto.wa.SendPaymentMessage.prototype.getRequestmessagekey = function() {
  return /** @type{?proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 3));
};


/**
 * @param {?proto.wa.MessageKey|undefined} value
 * @return {!proto.wa.SendPaymentMessage} returns this
*/
proto.wa.SendPaymentMessage.prototype.setRequestmessagekey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.SendPaymentMessage} returns this
 */
proto.wa.SendPaymentMessage.prototype.clearRequestmessagekey = function() {
  return this.setRequestmessagekey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.SendPaymentMessage.prototype.hasRequestmessagekey = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.RequestPaymentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.RequestPaymentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.RequestPaymentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.RequestPaymentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    notemessage: (f = msg.getNotemessage()) && proto.wa.Message.toObject(includeInstance, f),
    currencycodeiso4217: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount1000: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    requestfrom: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    expirytimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.RequestPaymentMessage}
 */
proto.wa.RequestPaymentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.RequestPaymentMessage;
  return proto.wa.RequestPaymentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.RequestPaymentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.RequestPaymentMessage}
 */
proto.wa.RequestPaymentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.wa.Message;
      reader.readMessage(value,proto.wa.Message.deserializeBinaryFromReader);
      msg.setNotemessage(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycodeiso4217(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount1000(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestfrom(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirytimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.RequestPaymentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.RequestPaymentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.RequestPaymentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.RequestPaymentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotemessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wa.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional Message noteMessage = 4;
 * @return {?proto.wa.Message}
 */
proto.wa.RequestPaymentMessage.prototype.getNotemessage = function() {
  return /** @type{?proto.wa.Message} */ (
    jspb.Message.getWrapperField(this, proto.wa.Message, 4));
};


/**
 * @param {?proto.wa.Message|undefined} value
 * @return {!proto.wa.RequestPaymentMessage} returns this
*/
proto.wa.RequestPaymentMessage.prototype.setNotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.clearNotemessage = function() {
  return this.setNotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.RequestPaymentMessage.prototype.hasNotemessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string currencyCodeIso4217 = 1;
 * @return {string}
 */
proto.wa.RequestPaymentMessage.prototype.getCurrencycodeiso4217 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.setCurrencycodeiso4217 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.clearCurrencycodeiso4217 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.RequestPaymentMessage.prototype.hasCurrencycodeiso4217 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount1000 = 2;
 * @return {number}
 */
proto.wa.RequestPaymentMessage.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.RequestPaymentMessage.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string requestFrom = 3;
 * @return {string}
 */
proto.wa.RequestPaymentMessage.prototype.getRequestfrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.setRequestfrom = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.clearRequestfrom = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.RequestPaymentMessage.prototype.hasRequestfrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 expiryTimestamp = 5;
 * @return {number}
 */
proto.wa.RequestPaymentMessage.prototype.getExpirytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.setExpirytimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.RequestPaymentMessage} returns this
 */
proto.wa.RequestPaymentMessage.prototype.clearExpirytimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.RequestPaymentMessage.prototype.hasExpirytimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.DeclinePaymentRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.DeclinePaymentRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.DeclinePaymentRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.DeclinePaymentRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.wa.MessageKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.DeclinePaymentRequestMessage}
 */
proto.wa.DeclinePaymentRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.DeclinePaymentRequestMessage;
  return proto.wa.DeclinePaymentRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.DeclinePaymentRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.DeclinePaymentRequestMessage}
 */
proto.wa.DeclinePaymentRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.DeclinePaymentRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.DeclinePaymentRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.DeclinePaymentRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.DeclinePaymentRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.wa.MessageKey}
 */
proto.wa.DeclinePaymentRequestMessage.prototype.getKey = function() {
  return /** @type{?proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 1));
};


/**
 * @param {?proto.wa.MessageKey|undefined} value
 * @return {!proto.wa.DeclinePaymentRequestMessage} returns this
*/
proto.wa.DeclinePaymentRequestMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.DeclinePaymentRequestMessage} returns this
 */
proto.wa.DeclinePaymentRequestMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DeclinePaymentRequestMessage.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.CancelPaymentRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.CancelPaymentRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.CancelPaymentRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.CancelPaymentRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.wa.MessageKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.CancelPaymentRequestMessage}
 */
proto.wa.CancelPaymentRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.CancelPaymentRequestMessage;
  return proto.wa.CancelPaymentRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.CancelPaymentRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.CancelPaymentRequestMessage}
 */
proto.wa.CancelPaymentRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.CancelPaymentRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.CancelPaymentRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.CancelPaymentRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.CancelPaymentRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.wa.MessageKey}
 */
proto.wa.CancelPaymentRequestMessage.prototype.getKey = function() {
  return /** @type{?proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 1));
};


/**
 * @param {?proto.wa.MessageKey|undefined} value
 * @return {!proto.wa.CancelPaymentRequestMessage} returns this
*/
proto.wa.CancelPaymentRequestMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.CancelPaymentRequestMessage} returns this
 */
proto.wa.CancelPaymentRequestMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.CancelPaymentRequestMessage.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.LiveLocationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.LiveLocationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.LiveLocationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.LiveLocationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    degreeslatitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    degreeslongitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    accuracyinmeters: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    speedinmps: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    degreesclockwisefrommagneticnorth: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    caption: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    sequencenumber: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    timeoffset: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.LiveLocationMessage}
 */
proto.wa.LiveLocationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.LiveLocationMessage;
  return proto.wa.LiveLocationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.LiveLocationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.LiveLocationMessage}
 */
proto.wa.LiveLocationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslongitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccuracyinmeters(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeedinmps(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDegreesclockwisefrommagneticnorth(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSequencenumber(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeoffset(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.LiveLocationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.LiveLocationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.LiveLocationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.LiveLocationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.wa.LiveLocationMessage.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.wa.LiveLocationMessage.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 accuracyInMeters = 3;
 * @return {number}
 */
proto.wa.LiveLocationMessage.prototype.getAccuracyinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setAccuracyinmeters = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearAccuracyinmeters = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasAccuracyinmeters = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float speedInMps = 4;
 * @return {number}
 */
proto.wa.LiveLocationMessage.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setSpeedinmps = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearSpeedinmps = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasSpeedinmps = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 degreesClockwiseFromMagneticNorth = 5;
 * @return {number}
 */
proto.wa.LiveLocationMessage.prototype.getDegreesclockwisefrommagneticnorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setDegreesclockwisefrommagneticnorth = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string caption = 6;
 * @return {string}
 */
proto.wa.LiveLocationMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 sequenceNumber = 7;
 * @return {number}
 */
proto.wa.LiveLocationMessage.prototype.getSequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setSequencenumber = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearSequencenumber = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasSequencenumber = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 timeOffset = 8;
 * @return {number}
 */
proto.wa.LiveLocationMessage.prototype.getTimeoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setTimeoffset = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearTimeoffset = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasTimeoffset = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.LiveLocationMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.LiveLocationMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.LiveLocationMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.LiveLocationMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.LiveLocationMessage} returns this
*/
proto.wa.LiveLocationMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.LiveLocationMessage} returns this
 */
proto.wa.LiveLocationMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.LiveLocationMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.StickerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.StickerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.StickerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.StickerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    mediakey: msg.getMediakey_asB64(),
    mimetype: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    height: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    width: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    directpath: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    filelength: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    firstframelength: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    firstframesidecar: msg.getFirstframesidecar_asB64(),
    isanimated: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    pngthumbnail: msg.getPngthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.StickerMessage}
 */
proto.wa.StickerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.StickerMessage;
  return proto.wa.StickerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.StickerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.StickerMessage}
 */
proto.wa.StickerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirstframelength(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFirstframesidecar(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsanimated(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPngthumbnail(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.StickerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.StickerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.StickerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.StickerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes fileSha256 = 2;
 * @return {!(string|Uint8Array)}
 */
proto.wa.StickerMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes fileSha256 = 2;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.wa.StickerMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileEncSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.wa.StickerMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileEncSha256 = 3;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.wa.StickerMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes mediaKey = 4;
 * @return {!(string|Uint8Array)}
 */
proto.wa.StickerMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes mediaKey = 4;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.wa.StickerMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string mimetype = 5;
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.wa.StickerMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 width = 7;
 * @return {number}
 */
proto.wa.StickerMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string directPath = 8;
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 fileLength = 9;
 * @return {number}
 */
proto.wa.StickerMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 10;
 * @return {number}
 */
proto.wa.StickerMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 firstFrameLength = 11;
 * @return {number}
 */
proto.wa.StickerMessage.prototype.getFirstframelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setFirstframelength = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearFirstframelength = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasFirstframelength = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes firstFrameSidecar = 12;
 * @return {!(string|Uint8Array)}
 */
proto.wa.StickerMessage.prototype.getFirstframesidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes firstFrameSidecar = 12;
 * This is a type-conversion wrapper around `getFirstframesidecar()`
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getFirstframesidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFirstframesidecar()));
};


/**
 * optional bytes firstFrameSidecar = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFirstframesidecar()`
 * @return {!Uint8Array}
 */
proto.wa.StickerMessage.prototype.getFirstframesidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFirstframesidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setFirstframesidecar = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearFirstframesidecar = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasFirstframesidecar = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool isAnimated = 13;
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.getIsanimated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setIsanimated = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearIsanimated = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasIsanimated = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bytes pngThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.wa.StickerMessage.prototype.getPngthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes pngThumbnail = 16;
 * This is a type-conversion wrapper around `getPngthumbnail()`
 * @return {string}
 */
proto.wa.StickerMessage.prototype.getPngthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPngthumbnail()));
};


/**
 * optional bytes pngThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPngthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.StickerMessage.prototype.getPngthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPngthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.setPngthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearPngthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasPngthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.StickerMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.StickerMessage} returns this
*/
proto.wa.StickerMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.StickerMessage} returns this
 */
proto.wa.StickerMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.StickerMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.FourRowTemplate.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.FourRowTemplate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.wa.FourRowTemplate.TitleCase = {
  TITLE_NOT_SET: 0,
  DOCUMENTMESSAGE: 1,
  HIGHLYSTRUCTUREDMESSAGE: 2,
  IMAGEMESSAGE: 3,
  VIDEOMESSAGE: 4,
  LOCATIONMESSAGE: 5
};

/**
 * @return {proto.wa.FourRowTemplate.TitleCase}
 */
proto.wa.FourRowTemplate.prototype.getTitleCase = function() {
  return /** @type {proto.wa.FourRowTemplate.TitleCase} */(jspb.Message.computeOneofCase(this, proto.wa.FourRowTemplate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.FourRowTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.FourRowTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.FourRowTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.FourRowTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: (f = msg.getContent()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f),
    footer: (f = msg.getFooter()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.wa.TemplateButton.toObject, includeInstance),
    documentmessage: (f = msg.getDocumentmessage()) && proto.wa.DocumentMessage.toObject(includeInstance, f),
    highlystructuredmessage: (f = msg.getHighlystructuredmessage()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f),
    imagemessage: (f = msg.getImagemessage()) && proto.wa.ImageMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.wa.VideoMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.wa.LocationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.FourRowTemplate}
 */
proto.wa.FourRowTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.FourRowTemplate;
  return proto.wa.FourRowTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.FourRowTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.FourRowTemplate}
 */
proto.wa.FourRowTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 7:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setFooter(value);
      break;
    case 8:
      var value = new proto.wa.TemplateButton;
      reader.readMessage(value,proto.wa.TemplateButton.deserializeBinaryFromReader);
      msg.addButtons(value);
      break;
    case 1:
      var value = new proto.wa.DocumentMessage;
      reader.readMessage(value,proto.wa.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 2:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setHighlystructuredmessage(value);
      break;
    case 3:
      var value = new proto.wa.ImageMessage;
      reader.readMessage(value,proto.wa.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.wa.VideoMessage;
      reader.readMessage(value,proto.wa.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 5:
      var value = new proto.wa.LocationMessage;
      reader.readMessage(value,proto.wa.LocationMessage.deserializeBinaryFromReader);
      msg.setLocationmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.FourRowTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.FourRowTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.FourRowTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.FourRowTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getFooter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.wa.TemplateButton.serializeBinaryToWriter
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = message.getHighlystructuredmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wa.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wa.LocationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage content = 6;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.FourRowTemplate.prototype.getContent = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 6));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.FourRowTemplate.prototype.hasContent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional HighlyStructuredMessage footer = 7;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.FourRowTemplate.prototype.getFooter = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 7));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setFooter = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearFooter = function() {
  return this.setFooter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.FourRowTemplate.prototype.hasFooter = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated TemplateButton buttons = 8;
 * @return {!Array<!proto.wa.TemplateButton>}
 */
proto.wa.FourRowTemplate.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.wa.TemplateButton>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.TemplateButton, 8));
};


/**
 * @param {!Array<!proto.wa.TemplateButton>} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setButtonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.wa.TemplateButton=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.TemplateButton}
 */
proto.wa.FourRowTemplate.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.wa.TemplateButton, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearButtonsList = function() {
  return this.setButtonsList([]);
};


/**
 * optional DocumentMessage documentMessage = 1;
 * @return {?proto.wa.DocumentMessage}
 */
proto.wa.FourRowTemplate.prototype.getDocumentmessage = function() {
  return /** @type{?proto.wa.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.DocumentMessage, 1));
};


/**
 * @param {?proto.wa.DocumentMessage|undefined} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wa.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.FourRowTemplate.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage highlyStructuredMessage = 2;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.FourRowTemplate.prototype.getHighlystructuredmessage = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setHighlystructuredmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wa.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearHighlystructuredmessage = function() {
  return this.setHighlystructuredmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.FourRowTemplate.prototype.hasHighlystructuredmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.wa.ImageMessage}
 */
proto.wa.FourRowTemplate.prototype.getImagemessage = function() {
  return /** @type{?proto.wa.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ImageMessage, 3));
};


/**
 * @param {?proto.wa.ImageMessage|undefined} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setImagemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.wa.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.FourRowTemplate.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoMessage videoMessage = 4;
 * @return {?proto.wa.VideoMessage}
 */
proto.wa.FourRowTemplate.prototype.getVideomessage = function() {
  return /** @type{?proto.wa.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.VideoMessage, 4));
};


/**
 * @param {?proto.wa.VideoMessage|undefined} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setVideomessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.wa.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.FourRowTemplate.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.wa.LocationMessage}
 */
proto.wa.FourRowTemplate.prototype.getLocationmessage = function() {
  return /** @type{?proto.wa.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.LocationMessage, 5));
};


/**
 * @param {?proto.wa.LocationMessage|undefined} value
 * @return {!proto.wa.FourRowTemplate} returns this
*/
proto.wa.FourRowTemplate.prototype.setLocationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.wa.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.FourRowTemplate} returns this
 */
proto.wa.FourRowTemplate.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.FourRowTemplate.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.HydratedFourRowTemplate.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.HydratedFourRowTemplate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.wa.HydratedFourRowTemplate.TitleCase = {
  TITLE_NOT_SET: 0,
  DOCUMENTMESSAGE: 1,
  HYDRATEDTITLETEXT: 2,
  IMAGEMESSAGE: 3,
  VIDEOMESSAGE: 4,
  LOCATIONMESSAGE: 5
};

/**
 * @return {proto.wa.HydratedFourRowTemplate.TitleCase}
 */
proto.wa.HydratedFourRowTemplate.prototype.getTitleCase = function() {
  return /** @type {proto.wa.HydratedFourRowTemplate.TitleCase} */(jspb.Message.computeOneofCase(this, proto.wa.HydratedFourRowTemplate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.HydratedFourRowTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.HydratedFourRowTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.HydratedFourRowTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedFourRowTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    hydratedcontenttext: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    hydratedfootertext: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    hydratedbuttonsList: jspb.Message.toObjectList(msg.getHydratedbuttonsList(),
    proto.wa.HydratedTemplateButton.toObject, includeInstance),
    templateid: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    documentmessage: (f = msg.getDocumentmessage()) && proto.wa.DocumentMessage.toObject(includeInstance, f),
    hydratedtitletext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    imagemessage: (f = msg.getImagemessage()) && proto.wa.ImageMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.wa.VideoMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.wa.LocationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.HydratedFourRowTemplate}
 */
proto.wa.HydratedFourRowTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.HydratedFourRowTemplate;
  return proto.wa.HydratedFourRowTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.HydratedFourRowTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.HydratedFourRowTemplate}
 */
proto.wa.HydratedFourRowTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHydratedcontenttext(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHydratedfootertext(value);
      break;
    case 8:
      var value = new proto.wa.HydratedTemplateButton;
      reader.readMessage(value,proto.wa.HydratedTemplateButton.deserializeBinaryFromReader);
      msg.addHydratedbuttons(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateid(value);
      break;
    case 1:
      var value = new proto.wa.DocumentMessage;
      reader.readMessage(value,proto.wa.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHydratedtitletext(value);
      break;
    case 3:
      var value = new proto.wa.ImageMessage;
      reader.readMessage(value,proto.wa.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.wa.VideoMessage;
      reader.readMessage(value,proto.wa.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 5:
      var value = new proto.wa.LocationMessage;
      reader.readMessage(value,proto.wa.LocationMessage.deserializeBinaryFromReader);
      msg.setLocationmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.HydratedFourRowTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.HydratedFourRowTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.HydratedFourRowTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.HydratedFourRowTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHydratedbuttonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.wa.HydratedTemplateButton.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wa.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wa.LocationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hydratedContentText = 6;
 * @return {string}
 */
proto.wa.HydratedFourRowTemplate.prototype.getHydratedcontenttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.setHydratedcontenttext = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearHydratedcontenttext = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasHydratedcontenttext = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string hydratedFooterText = 7;
 * @return {string}
 */
proto.wa.HydratedFourRowTemplate.prototype.getHydratedfootertext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.setHydratedfootertext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearHydratedfootertext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasHydratedfootertext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated HydratedTemplateButton hydratedButtons = 8;
 * @return {!Array<!proto.wa.HydratedTemplateButton>}
 */
proto.wa.HydratedFourRowTemplate.prototype.getHydratedbuttonsList = function() {
  return /** @type{!Array<!proto.wa.HydratedTemplateButton>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.HydratedTemplateButton, 8));
};


/**
 * @param {!Array<!proto.wa.HydratedTemplateButton>} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
*/
proto.wa.HydratedFourRowTemplate.prototype.setHydratedbuttonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.wa.HydratedTemplateButton=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.HydratedTemplateButton}
 */
proto.wa.HydratedFourRowTemplate.prototype.addHydratedbuttons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.wa.HydratedTemplateButton, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearHydratedbuttonsList = function() {
  return this.setHydratedbuttonsList([]);
};


/**
 * optional string templateId = 9;
 * @return {string}
 */
proto.wa.HydratedFourRowTemplate.prototype.getTemplateid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.setTemplateid = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearTemplateid = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasTemplateid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DocumentMessage documentMessage = 1;
 * @return {?proto.wa.DocumentMessage}
 */
proto.wa.HydratedFourRowTemplate.prototype.getDocumentmessage = function() {
  return /** @type{?proto.wa.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.DocumentMessage, 1));
};


/**
 * @param {?proto.wa.DocumentMessage|undefined} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
*/
proto.wa.HydratedFourRowTemplate.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wa.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string hydratedTitleText = 2;
 * @return {string}
 */
proto.wa.HydratedFourRowTemplate.prototype.getHydratedtitletext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.setHydratedtitletext = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.wa.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearHydratedtitletext = function() {
  return jspb.Message.setOneofField(this, 2, proto.wa.HydratedFourRowTemplate.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasHydratedtitletext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.wa.ImageMessage}
 */
proto.wa.HydratedFourRowTemplate.prototype.getImagemessage = function() {
  return /** @type{?proto.wa.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ImageMessage, 3));
};


/**
 * @param {?proto.wa.ImageMessage|undefined} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
*/
proto.wa.HydratedFourRowTemplate.prototype.setImagemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.wa.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoMessage videoMessage = 4;
 * @return {?proto.wa.VideoMessage}
 */
proto.wa.HydratedFourRowTemplate.prototype.getVideomessage = function() {
  return /** @type{?proto.wa.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.VideoMessage, 4));
};


/**
 * @param {?proto.wa.VideoMessage|undefined} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
*/
proto.wa.HydratedFourRowTemplate.prototype.setVideomessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.wa.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.wa.LocationMessage}
 */
proto.wa.HydratedFourRowTemplate.prototype.getLocationmessage = function() {
  return /** @type{?proto.wa.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.LocationMessage, 5));
};


/**
 * @param {?proto.wa.LocationMessage|undefined} value
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
*/
proto.wa.HydratedFourRowTemplate.prototype.setLocationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.wa.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.HydratedFourRowTemplate} returns this
 */
proto.wa.HydratedFourRowTemplate.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.HydratedFourRowTemplate.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wa.TemplateMessage.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.wa.TemplateMessage.FormatCase = {
  FORMAT_NOT_SET: 0,
  FOURROWTEMPLATE: 1,
  HYDRATEDFOURROWTEMPLATE: 2
};

/**
 * @return {proto.wa.TemplateMessage.FormatCase}
 */
proto.wa.TemplateMessage.prototype.getFormatCase = function() {
  return /** @type {proto.wa.TemplateMessage.FormatCase} */(jspb.Message.computeOneofCase(this, proto.wa.TemplateMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.TemplateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.TemplateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.TemplateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TemplateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f),
    hydratedtemplate: (f = msg.getHydratedtemplate()) && proto.wa.HydratedFourRowTemplate.toObject(includeInstance, f),
    fourrowtemplate: (f = msg.getFourrowtemplate()) && proto.wa.FourRowTemplate.toObject(includeInstance, f),
    hydratedfourrowtemplate: (f = msg.getHydratedfourrowtemplate()) && proto.wa.HydratedFourRowTemplate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.TemplateMessage}
 */
proto.wa.TemplateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.TemplateMessage;
  return proto.wa.TemplateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.TemplateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.TemplateMessage}
 */
proto.wa.TemplateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 4:
      var value = new proto.wa.HydratedFourRowTemplate;
      reader.readMessage(value,proto.wa.HydratedFourRowTemplate.deserializeBinaryFromReader);
      msg.setHydratedtemplate(value);
      break;
    case 1:
      var value = new proto.wa.FourRowTemplate;
      reader.readMessage(value,proto.wa.FourRowTemplate.deserializeBinaryFromReader);
      msg.setFourrowtemplate(value);
      break;
    case 2:
      var value = new proto.wa.HydratedFourRowTemplate;
      reader.readMessage(value,proto.wa.HydratedFourRowTemplate.deserializeBinaryFromReader);
      msg.setHydratedfourrowtemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.TemplateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.TemplateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.TemplateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TemplateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
  f = message.getHydratedtemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wa.HydratedFourRowTemplate.serializeBinaryToWriter
    );
  }
  f = message.getFourrowtemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.FourRowTemplate.serializeBinaryToWriter
    );
  }
  f = message.getHydratedfourrowtemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.HydratedFourRowTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContextInfo contextInfo = 3;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.TemplateMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 3));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.TemplateMessage} returns this
*/
proto.wa.TemplateMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateMessage} returns this
 */
proto.wa.TemplateMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional HydratedFourRowTemplate hydratedTemplate = 4;
 * @return {?proto.wa.HydratedFourRowTemplate}
 */
proto.wa.TemplateMessage.prototype.getHydratedtemplate = function() {
  return /** @type{?proto.wa.HydratedFourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.wa.HydratedFourRowTemplate, 4));
};


/**
 * @param {?proto.wa.HydratedFourRowTemplate|undefined} value
 * @return {!proto.wa.TemplateMessage} returns this
*/
proto.wa.TemplateMessage.prototype.setHydratedtemplate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateMessage} returns this
 */
proto.wa.TemplateMessage.prototype.clearHydratedtemplate = function() {
  return this.setHydratedtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateMessage.prototype.hasHydratedtemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FourRowTemplate fourRowTemplate = 1;
 * @return {?proto.wa.FourRowTemplate}
 */
proto.wa.TemplateMessage.prototype.getFourrowtemplate = function() {
  return /** @type{?proto.wa.FourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.wa.FourRowTemplate, 1));
};


/**
 * @param {?proto.wa.FourRowTemplate|undefined} value
 * @return {!proto.wa.TemplateMessage} returns this
*/
proto.wa.TemplateMessage.prototype.setFourrowtemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wa.TemplateMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateMessage} returns this
 */
proto.wa.TemplateMessage.prototype.clearFourrowtemplate = function() {
  return this.setFourrowtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateMessage.prototype.hasFourrowtemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HydratedFourRowTemplate hydratedFourRowTemplate = 2;
 * @return {?proto.wa.HydratedFourRowTemplate}
 */
proto.wa.TemplateMessage.prototype.getHydratedfourrowtemplate = function() {
  return /** @type{?proto.wa.HydratedFourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.wa.HydratedFourRowTemplate, 2));
};


/**
 * @param {?proto.wa.HydratedFourRowTemplate|undefined} value
 * @return {!proto.wa.TemplateMessage} returns this
*/
proto.wa.TemplateMessage.prototype.setHydratedfourrowtemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wa.TemplateMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateMessage} returns this
 */
proto.wa.TemplateMessage.prototype.clearHydratedfourrowtemplate = function() {
  return this.setHydratedfourrowtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateMessage.prototype.hasHydratedfourrowtemplate = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.TemplateButtonReplyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.TemplateButtonReplyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.TemplateButtonReplyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TemplateButtonReplyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectedid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    selecteddisplaytext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f),
    selectedindex: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.TemplateButtonReplyMessage}
 */
proto.wa.TemplateButtonReplyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.TemplateButtonReplyMessage;
  return proto.wa.TemplateButtonReplyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.TemplateButtonReplyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.TemplateButtonReplyMessage}
 */
proto.wa.TemplateButtonReplyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectedid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelecteddisplaytext(value);
      break;
    case 3:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSelectedindex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.TemplateButtonReplyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.TemplateButtonReplyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.TemplateButtonReplyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TemplateButtonReplyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string selectedId = 1;
 * @return {string}
 */
proto.wa.TemplateButtonReplyMessage.prototype.getSelectedid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
 */
proto.wa.TemplateButtonReplyMessage.prototype.setSelectedid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
 */
proto.wa.TemplateButtonReplyMessage.prototype.clearSelectedid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButtonReplyMessage.prototype.hasSelectedid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string selectedDisplayText = 2;
 * @return {string}
 */
proto.wa.TemplateButtonReplyMessage.prototype.getSelecteddisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
 */
proto.wa.TemplateButtonReplyMessage.prototype.setSelecteddisplaytext = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
 */
proto.wa.TemplateButtonReplyMessage.prototype.clearSelecteddisplaytext = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButtonReplyMessage.prototype.hasSelecteddisplaytext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContextInfo contextInfo = 3;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.TemplateButtonReplyMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 3));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
*/
proto.wa.TemplateButtonReplyMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
 */
proto.wa.TemplateButtonReplyMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButtonReplyMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 selectedIndex = 4;
 * @return {number}
 */
proto.wa.TemplateButtonReplyMessage.prototype.getSelectedindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
 */
proto.wa.TemplateButtonReplyMessage.prototype.setSelectedindex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.TemplateButtonReplyMessage} returns this
 */
proto.wa.TemplateButtonReplyMessage.prototype.clearSelectedindex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TemplateButtonReplyMessage.prototype.hasSelectedindex = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.CatalogSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.CatalogSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.CatalogSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.CatalogSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalogimage: (f = msg.getCatalogimage()) && proto.wa.ImageMessage.toObject(includeInstance, f),
    title: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.CatalogSnapshot}
 */
proto.wa.CatalogSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.CatalogSnapshot;
  return proto.wa.CatalogSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.CatalogSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.CatalogSnapshot}
 */
proto.wa.CatalogSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.ImageMessage;
      reader.readMessage(value,proto.wa.ImageMessage.deserializeBinaryFromReader);
      msg.setCatalogimage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.CatalogSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.CatalogSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.CatalogSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.CatalogSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCatalogimage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.ImageMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ImageMessage catalogImage = 1;
 * @return {?proto.wa.ImageMessage}
 */
proto.wa.CatalogSnapshot.prototype.getCatalogimage = function() {
  return /** @type{?proto.wa.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ImageMessage, 1));
};


/**
 * @param {?proto.wa.ImageMessage|undefined} value
 * @return {!proto.wa.CatalogSnapshot} returns this
*/
proto.wa.CatalogSnapshot.prototype.setCatalogimage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.CatalogSnapshot} returns this
 */
proto.wa.CatalogSnapshot.prototype.clearCatalogimage = function() {
  return this.setCatalogimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.CatalogSnapshot.prototype.hasCatalogimage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.wa.CatalogSnapshot.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.CatalogSnapshot} returns this
 */
proto.wa.CatalogSnapshot.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.CatalogSnapshot} returns this
 */
proto.wa.CatalogSnapshot.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.CatalogSnapshot.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.wa.CatalogSnapshot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.CatalogSnapshot} returns this
 */
proto.wa.CatalogSnapshot.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.CatalogSnapshot} returns this
 */
proto.wa.CatalogSnapshot.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.CatalogSnapshot.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ProductSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ProductSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ProductSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ProductSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    productimage: (f = msg.getProductimage()) && proto.wa.ImageMessage.toObject(includeInstance, f),
    productid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    currencycode: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    priceamount1000: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    retailerid: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    productimagecount: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    firstimageid: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ProductSnapshot}
 */
proto.wa.ProductSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ProductSnapshot;
  return proto.wa.ProductSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ProductSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ProductSnapshot}
 */
proto.wa.ProductSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.ImageMessage;
      reader.readMessage(value,proto.wa.ImageMessage.deserializeBinaryFromReader);
      msg.setProductimage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycode(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriceamount1000(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetailerid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProductimagecount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstimageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ProductSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ProductSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ProductSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ProductSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductimage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.ImageMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional ImageMessage productImage = 1;
 * @return {?proto.wa.ImageMessage}
 */
proto.wa.ProductSnapshot.prototype.getProductimage = function() {
  return /** @type{?proto.wa.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ImageMessage, 1));
};


/**
 * @param {?proto.wa.ImageMessage|undefined} value
 * @return {!proto.wa.ProductSnapshot} returns this
*/
proto.wa.ProductSnapshot.prototype.setProductimage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearProductimage = function() {
  return this.setProductimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasProductimage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string productId = 2;
 * @return {string}
 */
proto.wa.ProductSnapshot.prototype.getProductid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setProductid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearProductid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasProductid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.wa.ProductSnapshot.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.wa.ProductSnapshot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string currencyCode = 5;
 * @return {string}
 */
proto.wa.ProductSnapshot.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setCurrencycode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearCurrencycode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasCurrencycode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 priceAmount1000 = 6;
 * @return {number}
 */
proto.wa.ProductSnapshot.prototype.getPriceamount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setPriceamount1000 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearPriceamount1000 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasPriceamount1000 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string retailerId = 7;
 * @return {string}
 */
proto.wa.ProductSnapshot.prototype.getRetailerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setRetailerid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearRetailerid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasRetailerid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string url = 8;
 * @return {string}
 */
proto.wa.ProductSnapshot.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 productImageCount = 9;
 * @return {number}
 */
proto.wa.ProductSnapshot.prototype.getProductimagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setProductimagecount = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearProductimagecount = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasProductimagecount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string firstImageId = 11;
 * @return {string}
 */
proto.wa.ProductSnapshot.prototype.getFirstimageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.setFirstimageid = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductSnapshot} returns this
 */
proto.wa.ProductSnapshot.prototype.clearFirstimageid = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductSnapshot.prototype.hasFirstimageid = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.ProductMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.ProductMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.ProductMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ProductMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && proto.wa.ProductSnapshot.toObject(includeInstance, f),
    businessownerjid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    catalog: (f = msg.getCatalog()) && proto.wa.CatalogSnapshot.toObject(includeInstance, f),
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.ProductMessage}
 */
proto.wa.ProductMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.ProductMessage;
  return proto.wa.ProductMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.ProductMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.ProductMessage}
 */
proto.wa.ProductMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.ProductSnapshot;
      reader.readMessage(value,proto.wa.ProductSnapshot.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessownerjid(value);
      break;
    case 4:
      var value = new proto.wa.CatalogSnapshot;
      reader.readMessage(value,proto.wa.CatalogSnapshot.deserializeBinaryFromReader);
      msg.setCatalog(value);
      break;
    case 17:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.ProductMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.ProductMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.ProductMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.ProductMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.ProductSnapshot.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCatalog();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wa.CatalogSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProductSnapshot product = 1;
 * @return {?proto.wa.ProductSnapshot}
 */
proto.wa.ProductMessage.prototype.getProduct = function() {
  return /** @type{?proto.wa.ProductSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.wa.ProductSnapshot, 1));
};


/**
 * @param {?proto.wa.ProductSnapshot|undefined} value
 * @return {!proto.wa.ProductMessage} returns this
*/
proto.wa.ProductMessage.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ProductMessage} returns this
 */
proto.wa.ProductMessage.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductMessage.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string businessOwnerJid = 2;
 * @return {string}
 */
proto.wa.ProductMessage.prototype.getBusinessownerjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.ProductMessage} returns this
 */
proto.wa.ProductMessage.prototype.setBusinessownerjid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.ProductMessage} returns this
 */
proto.wa.ProductMessage.prototype.clearBusinessownerjid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductMessage.prototype.hasBusinessownerjid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CatalogSnapshot catalog = 4;
 * @return {?proto.wa.CatalogSnapshot}
 */
proto.wa.ProductMessage.prototype.getCatalog = function() {
  return /** @type{?proto.wa.CatalogSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.wa.CatalogSnapshot, 4));
};


/**
 * @param {?proto.wa.CatalogSnapshot|undefined} value
 * @return {!proto.wa.ProductMessage} returns this
*/
proto.wa.ProductMessage.prototype.setCatalog = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ProductMessage} returns this
 */
proto.wa.ProductMessage.prototype.clearCatalog = function() {
  return this.setCatalog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductMessage.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.ProductMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 17));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.ProductMessage} returns this
*/
proto.wa.ProductMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.ProductMessage} returns this
 */
proto.wa.ProductMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.ProductMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.GroupInviteMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.GroupInviteMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.GroupInviteMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.GroupInviteMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupjid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    invitecode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    inviteexpiration: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    groupname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    caption: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.wa.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.GroupInviteMessage}
 */
proto.wa.GroupInviteMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.GroupInviteMessage;
  return proto.wa.GroupInviteMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.GroupInviteMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.GroupInviteMessage}
 */
proto.wa.GroupInviteMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupjid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitecode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInviteexpiration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupname(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 7:
      var value = new proto.wa.ContextInfo;
      reader.readMessage(value,proto.wa.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.GroupInviteMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.GroupInviteMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.GroupInviteMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.GroupInviteMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.wa.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string groupJid = 1;
 * @return {string}
 */
proto.wa.GroupInviteMessage.prototype.getGroupjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.setGroupjid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.clearGroupjid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.GroupInviteMessage.prototype.hasGroupjid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string inviteCode = 2;
 * @return {string}
 */
proto.wa.GroupInviteMessage.prototype.getInvitecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.setInvitecode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.clearInvitecode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.GroupInviteMessage.prototype.hasInvitecode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 inviteExpiration = 3;
 * @return {number}
 */
proto.wa.GroupInviteMessage.prototype.getInviteexpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.setInviteexpiration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.clearInviteexpiration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.GroupInviteMessage.prototype.hasInviteexpiration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string groupName = 4;
 * @return {string}
 */
proto.wa.GroupInviteMessage.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.setGroupname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.clearGroupname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.GroupInviteMessage.prototype.hasGroupname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes jpegThumbnail = 5;
 * @return {!(string|Uint8Array)}
 */
proto.wa.GroupInviteMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes jpegThumbnail = 5;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.wa.GroupInviteMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.wa.GroupInviteMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.GroupInviteMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string caption = 6;
 * @return {string}
 */
proto.wa.GroupInviteMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.GroupInviteMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ContextInfo contextInfo = 7;
 * @return {?proto.wa.ContextInfo}
 */
proto.wa.GroupInviteMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.wa.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContextInfo, 7));
};


/**
 * @param {?proto.wa.ContextInfo|undefined} value
 * @return {!proto.wa.GroupInviteMessage} returns this
*/
proto.wa.GroupInviteMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.GroupInviteMessage} returns this
 */
proto.wa.GroupInviteMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.GroupInviteMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.DeviceSentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.DeviceSentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.DeviceSentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.DeviceSentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationjid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    message: (f = msg.getMessage()) && proto.wa.Message.toObject(includeInstance, f),
    phash: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.DeviceSentMessage}
 */
proto.wa.DeviceSentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.DeviceSentMessage;
  return proto.wa.DeviceSentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.DeviceSentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.DeviceSentMessage}
 */
proto.wa.DeviceSentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationjid(value);
      break;
    case 2:
      var value = new proto.wa.Message;
      reader.readMessage(value,proto.wa.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.DeviceSentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.DeviceSentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.DeviceSentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.DeviceSentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string destinationJid = 1;
 * @return {string}
 */
proto.wa.DeviceSentMessage.prototype.getDestinationjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.DeviceSentMessage} returns this
 */
proto.wa.DeviceSentMessage.prototype.setDestinationjid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DeviceSentMessage} returns this
 */
proto.wa.DeviceSentMessage.prototype.clearDestinationjid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DeviceSentMessage.prototype.hasDestinationjid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.wa.Message}
 */
proto.wa.DeviceSentMessage.prototype.getMessage = function() {
  return /** @type{?proto.wa.Message} */ (
    jspb.Message.getWrapperField(this, proto.wa.Message, 2));
};


/**
 * @param {?proto.wa.Message|undefined} value
 * @return {!proto.wa.DeviceSentMessage} returns this
*/
proto.wa.DeviceSentMessage.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.DeviceSentMessage} returns this
 */
proto.wa.DeviceSentMessage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DeviceSentMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phash = 3;
 * @return {string}
 */
proto.wa.DeviceSentMessage.prototype.getPhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.DeviceSentMessage} returns this
 */
proto.wa.DeviceSentMessage.prototype.setPhash = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.DeviceSentMessage} returns this
 */
proto.wa.DeviceSentMessage.prototype.clearPhash = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.DeviceSentMessage.prototype.hasPhash = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversation: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    senderkeydistributionmessage: (f = msg.getSenderkeydistributionmessage()) && proto.wa.SenderKeyDistributionMessage.toObject(includeInstance, f),
    imagemessage: (f = msg.getImagemessage()) && proto.wa.ImageMessage.toObject(includeInstance, f),
    contactmessage: (f = msg.getContactmessage()) && proto.wa.ContactMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.wa.LocationMessage.toObject(includeInstance, f),
    extendedtextmessage: (f = msg.getExtendedtextmessage()) && proto.wa.ExtendedTextMessage.toObject(includeInstance, f),
    documentmessage: (f = msg.getDocumentmessage()) && proto.wa.DocumentMessage.toObject(includeInstance, f),
    audiomessage: (f = msg.getAudiomessage()) && proto.wa.AudioMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.wa.VideoMessage.toObject(includeInstance, f),
    call: (f = msg.getCall()) && proto.wa.Call.toObject(includeInstance, f),
    chat: (f = msg.getChat()) && proto.wa.Chat.toObject(includeInstance, f),
    protocolmessage: (f = msg.getProtocolmessage()) && proto.wa.ProtocolMessage.toObject(includeInstance, f),
    contactsarraymessage: (f = msg.getContactsarraymessage()) && proto.wa.ContactsArrayMessage.toObject(includeInstance, f),
    highlystructuredmessage: (f = msg.getHighlystructuredmessage()) && proto.wa.HighlyStructuredMessage.toObject(includeInstance, f),
    fastratchetkeysenderkeydistributionmessage: (f = msg.getFastratchetkeysenderkeydistributionmessage()) && proto.wa.SenderKeyDistributionMessage.toObject(includeInstance, f),
    sendpaymentmessage: (f = msg.getSendpaymentmessage()) && proto.wa.SendPaymentMessage.toObject(includeInstance, f),
    livelocationmessage: (f = msg.getLivelocationmessage()) && proto.wa.LiveLocationMessage.toObject(includeInstance, f),
    requestpaymentmessage: (f = msg.getRequestpaymentmessage()) && proto.wa.RequestPaymentMessage.toObject(includeInstance, f),
    declinepaymentrequestmessage: (f = msg.getDeclinepaymentrequestmessage()) && proto.wa.DeclinePaymentRequestMessage.toObject(includeInstance, f),
    cancelpaymentrequestmessage: (f = msg.getCancelpaymentrequestmessage()) && proto.wa.CancelPaymentRequestMessage.toObject(includeInstance, f),
    templatemessage: (f = msg.getTemplatemessage()) && proto.wa.TemplateMessage.toObject(includeInstance, f),
    stickermessage: (f = msg.getStickermessage()) && proto.wa.StickerMessage.toObject(includeInstance, f),
    groupinvitemessage: (f = msg.getGroupinvitemessage()) && proto.wa.GroupInviteMessage.toObject(includeInstance, f),
    templatebuttonreplymessage: (f = msg.getTemplatebuttonreplymessage()) && proto.wa.TemplateButtonReplyMessage.toObject(includeInstance, f),
    productmessage: (f = msg.getProductmessage()) && proto.wa.ProductMessage.toObject(includeInstance, f),
    devicesentmessage: (f = msg.getDevicesentmessage()) && proto.wa.DeviceSentMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.Message}
 */
proto.wa.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.Message;
  return proto.wa.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.Message}
 */
proto.wa.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversation(value);
      break;
    case 2:
      var value = new proto.wa.SenderKeyDistributionMessage;
      reader.readMessage(value,proto.wa.SenderKeyDistributionMessage.deserializeBinaryFromReader);
      msg.setSenderkeydistributionmessage(value);
      break;
    case 3:
      var value = new proto.wa.ImageMessage;
      reader.readMessage(value,proto.wa.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.wa.ContactMessage;
      reader.readMessage(value,proto.wa.ContactMessage.deserializeBinaryFromReader);
      msg.setContactmessage(value);
      break;
    case 5:
      var value = new proto.wa.LocationMessage;
      reader.readMessage(value,proto.wa.LocationMessage.deserializeBinaryFromReader);
      msg.setLocationmessage(value);
      break;
    case 6:
      var value = new proto.wa.ExtendedTextMessage;
      reader.readMessage(value,proto.wa.ExtendedTextMessage.deserializeBinaryFromReader);
      msg.setExtendedtextmessage(value);
      break;
    case 7:
      var value = new proto.wa.DocumentMessage;
      reader.readMessage(value,proto.wa.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 8:
      var value = new proto.wa.AudioMessage;
      reader.readMessage(value,proto.wa.AudioMessage.deserializeBinaryFromReader);
      msg.setAudiomessage(value);
      break;
    case 9:
      var value = new proto.wa.VideoMessage;
      reader.readMessage(value,proto.wa.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 10:
      var value = new proto.wa.Call;
      reader.readMessage(value,proto.wa.Call.deserializeBinaryFromReader);
      msg.setCall(value);
      break;
    case 11:
      var value = new proto.wa.Chat;
      reader.readMessage(value,proto.wa.Chat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 12:
      var value = new proto.wa.ProtocolMessage;
      reader.readMessage(value,proto.wa.ProtocolMessage.deserializeBinaryFromReader);
      msg.setProtocolmessage(value);
      break;
    case 13:
      var value = new proto.wa.ContactsArrayMessage;
      reader.readMessage(value,proto.wa.ContactsArrayMessage.deserializeBinaryFromReader);
      msg.setContactsarraymessage(value);
      break;
    case 14:
      var value = new proto.wa.HighlyStructuredMessage;
      reader.readMessage(value,proto.wa.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setHighlystructuredmessage(value);
      break;
    case 15:
      var value = new proto.wa.SenderKeyDistributionMessage;
      reader.readMessage(value,proto.wa.SenderKeyDistributionMessage.deserializeBinaryFromReader);
      msg.setFastratchetkeysenderkeydistributionmessage(value);
      break;
    case 16:
      var value = new proto.wa.SendPaymentMessage;
      reader.readMessage(value,proto.wa.SendPaymentMessage.deserializeBinaryFromReader);
      msg.setSendpaymentmessage(value);
      break;
    case 18:
      var value = new proto.wa.LiveLocationMessage;
      reader.readMessage(value,proto.wa.LiveLocationMessage.deserializeBinaryFromReader);
      msg.setLivelocationmessage(value);
      break;
    case 22:
      var value = new proto.wa.RequestPaymentMessage;
      reader.readMessage(value,proto.wa.RequestPaymentMessage.deserializeBinaryFromReader);
      msg.setRequestpaymentmessage(value);
      break;
    case 23:
      var value = new proto.wa.DeclinePaymentRequestMessage;
      reader.readMessage(value,proto.wa.DeclinePaymentRequestMessage.deserializeBinaryFromReader);
      msg.setDeclinepaymentrequestmessage(value);
      break;
    case 24:
      var value = new proto.wa.CancelPaymentRequestMessage;
      reader.readMessage(value,proto.wa.CancelPaymentRequestMessage.deserializeBinaryFromReader);
      msg.setCancelpaymentrequestmessage(value);
      break;
    case 25:
      var value = new proto.wa.TemplateMessage;
      reader.readMessage(value,proto.wa.TemplateMessage.deserializeBinaryFromReader);
      msg.setTemplatemessage(value);
      break;
    case 26:
      var value = new proto.wa.StickerMessage;
      reader.readMessage(value,proto.wa.StickerMessage.deserializeBinaryFromReader);
      msg.setStickermessage(value);
      break;
    case 28:
      var value = new proto.wa.GroupInviteMessage;
      reader.readMessage(value,proto.wa.GroupInviteMessage.deserializeBinaryFromReader);
      msg.setGroupinvitemessage(value);
      break;
    case 29:
      var value = new proto.wa.TemplateButtonReplyMessage;
      reader.readMessage(value,proto.wa.TemplateButtonReplyMessage.deserializeBinaryFromReader);
      msg.setTemplatebuttonreplymessage(value);
      break;
    case 30:
      var value = new proto.wa.ProductMessage;
      reader.readMessage(value,proto.wa.ProductMessage.deserializeBinaryFromReader);
      msg.setProductmessage(value);
      break;
    case 31:
      var value = new proto.wa.DeviceSentMessage;
      reader.readMessage(value,proto.wa.DeviceSentMessage.deserializeBinaryFromReader);
      msg.setDevicesentmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSenderkeydistributionmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.SenderKeyDistributionMessage.serializeBinaryToWriter
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wa.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getContactmessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wa.ContactMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wa.LocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getExtendedtextmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wa.ExtendedTextMessage.serializeBinaryToWriter
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.wa.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = message.getAudiomessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.wa.AudioMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.wa.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getCall();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.wa.Call.serializeBinaryToWriter
    );
  }
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.wa.Chat.serializeBinaryToWriter
    );
  }
  f = message.getProtocolmessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.wa.ProtocolMessage.serializeBinaryToWriter
    );
  }
  f = message.getContactsarraymessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.wa.ContactsArrayMessage.serializeBinaryToWriter
    );
  }
  f = message.getHighlystructuredmessage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.wa.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getFastratchetkeysenderkeydistributionmessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.wa.SenderKeyDistributionMessage.serializeBinaryToWriter
    );
  }
  f = message.getSendpaymentmessage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.wa.SendPaymentMessage.serializeBinaryToWriter
    );
  }
  f = message.getLivelocationmessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.wa.LiveLocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestpaymentmessage();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.wa.RequestPaymentMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeclinepaymentrequestmessage();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.wa.DeclinePaymentRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getCancelpaymentrequestmessage();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.wa.CancelPaymentRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getTemplatemessage();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.wa.TemplateMessage.serializeBinaryToWriter
    );
  }
  f = message.getStickermessage();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.wa.StickerMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupinvitemessage();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.wa.GroupInviteMessage.serializeBinaryToWriter
    );
  }
  f = message.getTemplatebuttonreplymessage();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.wa.TemplateButtonReplyMessage.serializeBinaryToWriter
    );
  }
  f = message.getProductmessage();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.wa.ProductMessage.serializeBinaryToWriter
    );
  }
  f = message.getDevicesentmessage();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.wa.DeviceSentMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversation = 1;
 * @return {string}
 */
proto.wa.Message.prototype.getConversation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.setConversation = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearConversation = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SenderKeyDistributionMessage senderKeyDistributionMessage = 2;
 * @return {?proto.wa.SenderKeyDistributionMessage}
 */
proto.wa.Message.prototype.getSenderkeydistributionmessage = function() {
  return /** @type{?proto.wa.SenderKeyDistributionMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.SenderKeyDistributionMessage, 2));
};


/**
 * @param {?proto.wa.SenderKeyDistributionMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setSenderkeydistributionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearSenderkeydistributionmessage = function() {
  return this.setSenderkeydistributionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasSenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.wa.ImageMessage}
 */
proto.wa.Message.prototype.getImagemessage = function() {
  return /** @type{?proto.wa.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ImageMessage, 3));
};


/**
 * @param {?proto.wa.ImageMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setImagemessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ContactMessage contactMessage = 4;
 * @return {?proto.wa.ContactMessage}
 */
proto.wa.Message.prototype.getContactmessage = function() {
  return /** @type{?proto.wa.ContactMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContactMessage, 4));
};


/**
 * @param {?proto.wa.ContactMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setContactmessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearContactmessage = function() {
  return this.setContactmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasContactmessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.wa.LocationMessage}
 */
proto.wa.Message.prototype.getLocationmessage = function() {
  return /** @type{?proto.wa.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.LocationMessage, 5));
};


/**
 * @param {?proto.wa.LocationMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setLocationmessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ExtendedTextMessage extendedTextMessage = 6;
 * @return {?proto.wa.ExtendedTextMessage}
 */
proto.wa.Message.prototype.getExtendedtextmessage = function() {
  return /** @type{?proto.wa.ExtendedTextMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ExtendedTextMessage, 6));
};


/**
 * @param {?proto.wa.ExtendedTextMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setExtendedtextmessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearExtendedtextmessage = function() {
  return this.setExtendedtextmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasExtendedtextmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DocumentMessage documentMessage = 7;
 * @return {?proto.wa.DocumentMessage}
 */
proto.wa.Message.prototype.getDocumentmessage = function() {
  return /** @type{?proto.wa.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.DocumentMessage, 7));
};


/**
 * @param {?proto.wa.DocumentMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AudioMessage audioMessage = 8;
 * @return {?proto.wa.AudioMessage}
 */
proto.wa.Message.prototype.getAudiomessage = function() {
  return /** @type{?proto.wa.AudioMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.AudioMessage, 8));
};


/**
 * @param {?proto.wa.AudioMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setAudiomessage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearAudiomessage = function() {
  return this.setAudiomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasAudiomessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional VideoMessage videoMessage = 9;
 * @return {?proto.wa.VideoMessage}
 */
proto.wa.Message.prototype.getVideomessage = function() {
  return /** @type{?proto.wa.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.VideoMessage, 9));
};


/**
 * @param {?proto.wa.VideoMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setVideomessage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Call call = 10;
 * @return {?proto.wa.Call}
 */
proto.wa.Message.prototype.getCall = function() {
  return /** @type{?proto.wa.Call} */ (
    jspb.Message.getWrapperField(this, proto.wa.Call, 10));
};


/**
 * @param {?proto.wa.Call|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setCall = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearCall = function() {
  return this.setCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasCall = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Chat chat = 11;
 * @return {?proto.wa.Chat}
 */
proto.wa.Message.prototype.getChat = function() {
  return /** @type{?proto.wa.Chat} */ (
    jspb.Message.getWrapperField(this, proto.wa.Chat, 11));
};


/**
 * @param {?proto.wa.Chat|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasChat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ProtocolMessage protocolMessage = 12;
 * @return {?proto.wa.ProtocolMessage}
 */
proto.wa.Message.prototype.getProtocolmessage = function() {
  return /** @type{?proto.wa.ProtocolMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ProtocolMessage, 12));
};


/**
 * @param {?proto.wa.ProtocolMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setProtocolmessage = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearProtocolmessage = function() {
  return this.setProtocolmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasProtocolmessage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ContactsArrayMessage contactsArrayMessage = 13;
 * @return {?proto.wa.ContactsArrayMessage}
 */
proto.wa.Message.prototype.getContactsarraymessage = function() {
  return /** @type{?proto.wa.ContactsArrayMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ContactsArrayMessage, 13));
};


/**
 * @param {?proto.wa.ContactsArrayMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setContactsarraymessage = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearContactsarraymessage = function() {
  return this.setContactsarraymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasContactsarraymessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional HighlyStructuredMessage highlyStructuredMessage = 14;
 * @return {?proto.wa.HighlyStructuredMessage}
 */
proto.wa.Message.prototype.getHighlystructuredmessage = function() {
  return /** @type{?proto.wa.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.HighlyStructuredMessage, 14));
};


/**
 * @param {?proto.wa.HighlyStructuredMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setHighlystructuredmessage = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearHighlystructuredmessage = function() {
  return this.setHighlystructuredmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasHighlystructuredmessage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional SenderKeyDistributionMessage fastRatchetKeySenderKeyDistributionMessage = 15;
 * @return {?proto.wa.SenderKeyDistributionMessage}
 */
proto.wa.Message.prototype.getFastratchetkeysenderkeydistributionmessage = function() {
  return /** @type{?proto.wa.SenderKeyDistributionMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.SenderKeyDistributionMessage, 15));
};


/**
 * @param {?proto.wa.SenderKeyDistributionMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setFastratchetkeysenderkeydistributionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearFastratchetkeysenderkeydistributionmessage = function() {
  return this.setFastratchetkeysenderkeydistributionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasFastratchetkeysenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional SendPaymentMessage sendPaymentMessage = 16;
 * @return {?proto.wa.SendPaymentMessage}
 */
proto.wa.Message.prototype.getSendpaymentmessage = function() {
  return /** @type{?proto.wa.SendPaymentMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.SendPaymentMessage, 16));
};


/**
 * @param {?proto.wa.SendPaymentMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setSendpaymentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearSendpaymentmessage = function() {
  return this.setSendpaymentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasSendpaymentmessage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional LiveLocationMessage liveLocationMessage = 18;
 * @return {?proto.wa.LiveLocationMessage}
 */
proto.wa.Message.prototype.getLivelocationmessage = function() {
  return /** @type{?proto.wa.LiveLocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.LiveLocationMessage, 18));
};


/**
 * @param {?proto.wa.LiveLocationMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setLivelocationmessage = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearLivelocationmessage = function() {
  return this.setLivelocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasLivelocationmessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional RequestPaymentMessage requestPaymentMessage = 22;
 * @return {?proto.wa.RequestPaymentMessage}
 */
proto.wa.Message.prototype.getRequestpaymentmessage = function() {
  return /** @type{?proto.wa.RequestPaymentMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.RequestPaymentMessage, 22));
};


/**
 * @param {?proto.wa.RequestPaymentMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setRequestpaymentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearRequestpaymentmessage = function() {
  return this.setRequestpaymentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasRequestpaymentmessage = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional DeclinePaymentRequestMessage declinePaymentRequestMessage = 23;
 * @return {?proto.wa.DeclinePaymentRequestMessage}
 */
proto.wa.Message.prototype.getDeclinepaymentrequestmessage = function() {
  return /** @type{?proto.wa.DeclinePaymentRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.DeclinePaymentRequestMessage, 23));
};


/**
 * @param {?proto.wa.DeclinePaymentRequestMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setDeclinepaymentrequestmessage = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearDeclinepaymentrequestmessage = function() {
  return this.setDeclinepaymentrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasDeclinepaymentrequestmessage = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CancelPaymentRequestMessage cancelPaymentRequestMessage = 24;
 * @return {?proto.wa.CancelPaymentRequestMessage}
 */
proto.wa.Message.prototype.getCancelpaymentrequestmessage = function() {
  return /** @type{?proto.wa.CancelPaymentRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.CancelPaymentRequestMessage, 24));
};


/**
 * @param {?proto.wa.CancelPaymentRequestMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setCancelpaymentrequestmessage = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearCancelpaymentrequestmessage = function() {
  return this.setCancelpaymentrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasCancelpaymentrequestmessage = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional TemplateMessage templateMessage = 25;
 * @return {?proto.wa.TemplateMessage}
 */
proto.wa.Message.prototype.getTemplatemessage = function() {
  return /** @type{?proto.wa.TemplateMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.TemplateMessage, 25));
};


/**
 * @param {?proto.wa.TemplateMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setTemplatemessage = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearTemplatemessage = function() {
  return this.setTemplatemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasTemplatemessage = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional StickerMessage stickerMessage = 26;
 * @return {?proto.wa.StickerMessage}
 */
proto.wa.Message.prototype.getStickermessage = function() {
  return /** @type{?proto.wa.StickerMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.StickerMessage, 26));
};


/**
 * @param {?proto.wa.StickerMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setStickermessage = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearStickermessage = function() {
  return this.setStickermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasStickermessage = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional GroupInviteMessage groupInviteMessage = 28;
 * @return {?proto.wa.GroupInviteMessage}
 */
proto.wa.Message.prototype.getGroupinvitemessage = function() {
  return /** @type{?proto.wa.GroupInviteMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.GroupInviteMessage, 28));
};


/**
 * @param {?proto.wa.GroupInviteMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setGroupinvitemessage = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearGroupinvitemessage = function() {
  return this.setGroupinvitemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasGroupinvitemessage = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional TemplateButtonReplyMessage templateButtonReplyMessage = 29;
 * @return {?proto.wa.TemplateButtonReplyMessage}
 */
proto.wa.Message.prototype.getTemplatebuttonreplymessage = function() {
  return /** @type{?proto.wa.TemplateButtonReplyMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.TemplateButtonReplyMessage, 29));
};


/**
 * @param {?proto.wa.TemplateButtonReplyMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setTemplatebuttonreplymessage = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearTemplatebuttonreplymessage = function() {
  return this.setTemplatebuttonreplymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasTemplatebuttonreplymessage = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional ProductMessage productMessage = 30;
 * @return {?proto.wa.ProductMessage}
 */
proto.wa.Message.prototype.getProductmessage = function() {
  return /** @type{?proto.wa.ProductMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.ProductMessage, 30));
};


/**
 * @param {?proto.wa.ProductMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setProductmessage = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearProductmessage = function() {
  return this.setProductmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasProductmessage = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional DeviceSentMessage deviceSentMessage = 31;
 * @return {?proto.wa.DeviceSentMessage}
 */
proto.wa.Message.prototype.getDevicesentmessage = function() {
  return /** @type{?proto.wa.DeviceSentMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.DeviceSentMessage, 31));
};


/**
 * @param {?proto.wa.DeviceSentMessage|undefined} value
 * @return {!proto.wa.Message} returns this
*/
proto.wa.Message.prototype.setDevicesentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.Message} returns this
 */
proto.wa.Message.prototype.clearDevicesentmessage = function() {
  return this.setDevicesentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.Message.prototype.hasDevicesentmessage = function() {
  return jspb.Message.getField(this, 31) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.MessageKey.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.MessageKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.MessageKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.MessageKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    remotejid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    fromme: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    id: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.MessageKey}
 */
proto.wa.MessageKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.MessageKey;
  return proto.wa.MessageKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.MessageKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.MessageKey}
 */
proto.wa.MessageKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemotejid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromme(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.MessageKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.MessageKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.MessageKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.MessageKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string remoteJid = 1;
 * @return {string}
 */
proto.wa.MessageKey.prototype.getRemotejid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.setRemotejid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.clearRemotejid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.MessageKey.prototype.hasRemotejid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool fromMe = 2;
 * @return {boolean}
 */
proto.wa.MessageKey.prototype.getFromme = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.setFromme = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.clearFromme = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.MessageKey.prototype.hasFromme = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.wa.MessageKey.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.setId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.clearId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.MessageKey.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string participant = 4;
 * @return {string}
 */
proto.wa.MessageKey.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.MessageKey} returns this
 */
proto.wa.MessageKey.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.MessageKey.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.WebFeatures.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.WebFeatures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.WebFeatures} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.WebFeatures.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsdisplay: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    voipindividualoutgoing: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    groupsv3: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    groupsv3create: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    changenumberv2: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    querystatusv3thumbnail: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    livelocations: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    queryvname: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    voipindividualincoming: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    quickrepliesquery: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    payments: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    stickerpackquery: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    livelocationsfinal: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    labelsedit: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    mediaupload: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    mediauploadrichquickreplies: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    vnamev2: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    videoplaybackurl: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    statusranking: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    voipindividualvideo: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f,
    thirdpartystickers: (f = jspb.Message.getField(msg, 23)) == null ? undefined : f,
    frequentlyforwardedsetting: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    groupsv4joinpermission: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    recentstickers: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
    catalog: (f = jspb.Message.getField(msg, 27)) == null ? undefined : f,
    starredstickers: (f = jspb.Message.getField(msg, 28)) == null ? undefined : f,
    voipgroupcall: (f = jspb.Message.getField(msg, 29)) == null ? undefined : f,
    templatemessage: (f = jspb.Message.getField(msg, 30)) == null ? undefined : f,
    templatemessageinteractivity: (f = jspb.Message.getField(msg, 31)) == null ? undefined : f,
    ephemeralmessages: (f = jspb.Message.getField(msg, 32)) == null ? undefined : f,
    e2enotificationsync: (f = jspb.Message.getField(msg, 33)) == null ? undefined : f,
    recentstickersv2: (f = jspb.Message.getField(msg, 34)) == null ? undefined : f,
    syncdrelease1: (f = jspb.Message.getField(msg, 35)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.WebFeatures}
 */
proto.wa.WebFeatures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.WebFeatures;
  return proto.wa.WebFeatures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.WebFeatures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.WebFeatures}
 */
proto.wa.WebFeatures.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLabelsdisplay(value);
      break;
    case 2:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualoutgoing(value);
      break;
    case 3:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv3(value);
      break;
    case 4:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv3create(value);
      break;
    case 5:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setChangenumberv2(value);
      break;
    case 6:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQuerystatusv3thumbnail(value);
      break;
    case 7:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLivelocations(value);
      break;
    case 8:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQueryvname(value);
      break;
    case 9:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualincoming(value);
      break;
    case 10:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQuickrepliesquery(value);
      break;
    case 11:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setPayments(value);
      break;
    case 12:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStickerpackquery(value);
      break;
    case 13:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLivelocationsfinal(value);
      break;
    case 14:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLabelsedit(value);
      break;
    case 15:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setMediaupload(value);
      break;
    case 18:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setMediauploadrichquickreplies(value);
      break;
    case 19:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVnamev2(value);
      break;
    case 20:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVideoplaybackurl(value);
      break;
    case 21:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStatusranking(value);
      break;
    case 22:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualvideo(value);
      break;
    case 23:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setThirdpartystickers(value);
      break;
    case 24:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setFrequentlyforwardedsetting(value);
      break;
    case 25:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv4joinpermission(value);
      break;
    case 26:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setRecentstickers(value);
      break;
    case 27:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setCatalog(value);
      break;
    case 28:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStarredstickers(value);
      break;
    case 29:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipgroupcall(value);
      break;
    case 30:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setTemplatemessage(value);
      break;
    case 31:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setTemplatemessageinteractivity(value);
      break;
    case 32:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setEphemeralmessages(value);
      break;
    case 33:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setE2enotificationsync(value);
      break;
    case 34:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setRecentstickersv2(value);
      break;
    case 35:
      var value = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setSyncdrelease1(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.WebFeatures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.WebFeatures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.WebFeatures} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.WebFeatures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeEnum(
      25,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeEnum(
      29,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeEnum(
      30,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeEnum(
      32,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeEnum(
      33,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 35));
  if (f != null) {
    writer.writeEnum(
      35,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.WebFeatures.WEB_FEATURES_FLAG = {
  NOT_STARTED: 0,
  FORCE_UPGRADE: 1,
  DEVELOPMENT: 2,
  PRODUCTION: 3
};

/**
 * optional WEB_FEATURES_FLAG labelsDisplay = 1;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getLabelsdisplay = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setLabelsdisplay = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearLabelsdisplay = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasLabelsdisplay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualOutgoing = 2;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getVoipindividualoutgoing = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setVoipindividualoutgoing = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearVoipindividualoutgoing = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasVoipindividualoutgoing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV3 = 3;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getGroupsv3 = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setGroupsv3 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearGroupsv3 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasGroupsv3 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV3Create = 4;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getGroupsv3create = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setGroupsv3create = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearGroupsv3create = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasGroupsv3create = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional WEB_FEATURES_FLAG changeNumberV2 = 5;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getChangenumberv2 = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setChangenumberv2 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearChangenumberv2 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasChangenumberv2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional WEB_FEATURES_FLAG queryStatusV3Thumbnail = 6;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getQuerystatusv3thumbnail = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setQuerystatusv3thumbnail = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearQuerystatusv3thumbnail = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasQuerystatusv3thumbnail = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WEB_FEATURES_FLAG liveLocations = 7;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getLivelocations = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setLivelocations = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearLivelocations = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasLivelocations = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WEB_FEATURES_FLAG queryVname = 8;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getQueryvname = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setQueryvname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearQueryvname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasQueryvname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualIncoming = 9;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getVoipindividualincoming = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setVoipindividualincoming = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearVoipindividualincoming = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasVoipindividualincoming = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional WEB_FEATURES_FLAG quickRepliesQuery = 10;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getQuickrepliesquery = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setQuickrepliesquery = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearQuickrepliesquery = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasQuickrepliesquery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WEB_FEATURES_FLAG payments = 11;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getPayments = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setPayments = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearPayments = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasPayments = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional WEB_FEATURES_FLAG stickerPackQuery = 12;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getStickerpackquery = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setStickerpackquery = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearStickerpackquery = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasStickerpackquery = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional WEB_FEATURES_FLAG liveLocationsFinal = 13;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getLivelocationsfinal = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setLivelocationsfinal = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearLivelocationsfinal = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasLivelocationsfinal = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional WEB_FEATURES_FLAG labelsEdit = 14;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getLabelsedit = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setLabelsedit = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearLabelsedit = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasLabelsedit = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional WEB_FEATURES_FLAG mediaUpload = 15;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getMediaupload = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setMediaupload = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearMediaupload = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasMediaupload = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional WEB_FEATURES_FLAG mediaUploadRichQuickReplies = 18;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getMediauploadrichquickreplies = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setMediauploadrichquickreplies = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearMediauploadrichquickreplies = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasMediauploadrichquickreplies = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional WEB_FEATURES_FLAG vnameV2 = 19;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getVnamev2 = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setVnamev2 = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearVnamev2 = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasVnamev2 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional WEB_FEATURES_FLAG videoPlaybackUrl = 20;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getVideoplaybackurl = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setVideoplaybackurl = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearVideoplaybackurl = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasVideoplaybackurl = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional WEB_FEATURES_FLAG statusRanking = 21;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getStatusranking = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setStatusranking = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearStatusranking = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasStatusranking = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualVideo = 22;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getVoipindividualvideo = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setVoipindividualvideo = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearVoipindividualvideo = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasVoipindividualvideo = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional WEB_FEATURES_FLAG thirdPartyStickers = 23;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getThirdpartystickers = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setThirdpartystickers = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearThirdpartystickers = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasThirdpartystickers = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional WEB_FEATURES_FLAG frequentlyForwardedSetting = 24;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getFrequentlyforwardedsetting = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setFrequentlyforwardedsetting = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearFrequentlyforwardedsetting = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasFrequentlyforwardedsetting = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV4JoinPermission = 25;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getGroupsv4joinpermission = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setGroupsv4joinpermission = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearGroupsv4joinpermission = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasGroupsv4joinpermission = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional WEB_FEATURES_FLAG recentStickers = 26;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getRecentstickers = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setRecentstickers = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearRecentstickers = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasRecentstickers = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional WEB_FEATURES_FLAG catalog = 27;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getCatalog = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional WEB_FEATURES_FLAG starredStickers = 28;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getStarredstickers = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setStarredstickers = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearStarredstickers = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasStarredstickers = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipGroupCall = 29;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getVoipgroupcall = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setVoipgroupcall = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearVoipgroupcall = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasVoipgroupcall = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional WEB_FEATURES_FLAG templateMessage = 30;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getTemplatemessage = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setTemplatemessage = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearTemplatemessage = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasTemplatemessage = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional WEB_FEATURES_FLAG templateMessageInteractivity = 31;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getTemplatemessageinteractivity = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setTemplatemessageinteractivity = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearTemplatemessageinteractivity = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasTemplatemessageinteractivity = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional WEB_FEATURES_FLAG ephemeralMessages = 32;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getEphemeralmessages = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setEphemeralmessages = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearEphemeralmessages = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasEphemeralmessages = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional WEB_FEATURES_FLAG e2ENotificationSync = 33;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getE2enotificationsync = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setE2enotificationsync = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearE2enotificationsync = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasE2enotificationsync = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional WEB_FEATURES_FLAG recentStickersV2 = 34;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getRecentstickersv2 = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setRecentstickersv2 = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearRecentstickersv2 = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasRecentstickersv2 = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional WEB_FEATURES_FLAG syncdRelease1 = 35;
 * @return {!proto.wa.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.wa.WebFeatures.prototype.getSyncdrelease1 = function() {
  return /** @type {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {!proto.wa.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.setSyncdrelease1 = function(value) {
  return jspb.Message.setField(this, 35, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebFeatures} returns this
 */
proto.wa.WebFeatures.prototype.clearSyncdrelease1 = function() {
  return jspb.Message.setField(this, 35, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebFeatures.prototype.hasSyncdrelease1 = function() {
  return jspb.Message.getField(this, 35) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.TabletNotificationsInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.TabletNotificationsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.TabletNotificationsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.TabletNotificationsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TabletNotificationsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    unreadchats: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    notifymessagecount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    notifymessageList: jspb.Message.toObjectList(msg.getNotifymessageList(),
    proto.wa.NotificationMessageInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.TabletNotificationsInfo}
 */
proto.wa.TabletNotificationsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.TabletNotificationsInfo;
  return proto.wa.TabletNotificationsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.TabletNotificationsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.TabletNotificationsInfo}
 */
proto.wa.TabletNotificationsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadchats(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNotifymessagecount(value);
      break;
    case 5:
      var value = new proto.wa.NotificationMessageInfo;
      reader.readMessage(value,proto.wa.NotificationMessageInfo.deserializeBinaryFromReader);
      msg.addNotifymessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.TabletNotificationsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.TabletNotificationsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.TabletNotificationsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.TabletNotificationsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNotifymessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.wa.NotificationMessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.wa.TabletNotificationsInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.TabletNotificationsInfo} returns this
 */
proto.wa.TabletNotificationsInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.TabletNotificationsInfo} returns this
 */
proto.wa.TabletNotificationsInfo.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TabletNotificationsInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 unreadChats = 3;
 * @return {number}
 */
proto.wa.TabletNotificationsInfo.prototype.getUnreadchats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.TabletNotificationsInfo} returns this
 */
proto.wa.TabletNotificationsInfo.prototype.setUnreadchats = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.TabletNotificationsInfo} returns this
 */
proto.wa.TabletNotificationsInfo.prototype.clearUnreadchats = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TabletNotificationsInfo.prototype.hasUnreadchats = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 notifyMessageCount = 4;
 * @return {number}
 */
proto.wa.TabletNotificationsInfo.prototype.getNotifymessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.TabletNotificationsInfo} returns this
 */
proto.wa.TabletNotificationsInfo.prototype.setNotifymessagecount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.TabletNotificationsInfo} returns this
 */
proto.wa.TabletNotificationsInfo.prototype.clearNotifymessagecount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.TabletNotificationsInfo.prototype.hasNotifymessagecount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated NotificationMessageInfo notifyMessage = 5;
 * @return {!Array<!proto.wa.NotificationMessageInfo>}
 */
proto.wa.TabletNotificationsInfo.prototype.getNotifymessageList = function() {
  return /** @type{!Array<!proto.wa.NotificationMessageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.NotificationMessageInfo, 5));
};


/**
 * @param {!Array<!proto.wa.NotificationMessageInfo>} value
 * @return {!proto.wa.TabletNotificationsInfo} returns this
*/
proto.wa.TabletNotificationsInfo.prototype.setNotifymessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.wa.NotificationMessageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.NotificationMessageInfo}
 */
proto.wa.TabletNotificationsInfo.prototype.addNotifymessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.wa.NotificationMessageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.TabletNotificationsInfo} returns this
 */
proto.wa.TabletNotificationsInfo.prototype.clearNotifymessageList = function() {
  return this.setNotifymessageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.NotificationMessageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.NotificationMessageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.NotificationMessageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.NotificationMessageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.wa.MessageKey.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.wa.Message.toObject(includeInstance, f),
    messagetimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.NotificationMessageInfo}
 */
proto.wa.NotificationMessageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.NotificationMessageInfo;
  return proto.wa.NotificationMessageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.NotificationMessageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.NotificationMessageInfo}
 */
proto.wa.NotificationMessageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.wa.Message;
      reader.readMessage(value,proto.wa.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessagetimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.NotificationMessageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.NotificationMessageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.NotificationMessageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.NotificationMessageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.wa.MessageKey}
 */
proto.wa.NotificationMessageInfo.prototype.getKey = function() {
  return /** @type{?proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 1));
};


/**
 * @param {?proto.wa.MessageKey|undefined} value
 * @return {!proto.wa.NotificationMessageInfo} returns this
*/
proto.wa.NotificationMessageInfo.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.NotificationMessageInfo} returns this
 */
proto.wa.NotificationMessageInfo.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.NotificationMessageInfo.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.wa.Message}
 */
proto.wa.NotificationMessageInfo.prototype.getMessage = function() {
  return /** @type{?proto.wa.Message} */ (
    jspb.Message.getWrapperField(this, proto.wa.Message, 2));
};


/**
 * @param {?proto.wa.Message|undefined} value
 * @return {!proto.wa.NotificationMessageInfo} returns this
*/
proto.wa.NotificationMessageInfo.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.NotificationMessageInfo} returns this
 */
proto.wa.NotificationMessageInfo.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.NotificationMessageInfo.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 messageTimestamp = 3;
 * @return {number}
 */
proto.wa.NotificationMessageInfo.prototype.getMessagetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.NotificationMessageInfo} returns this
 */
proto.wa.NotificationMessageInfo.prototype.setMessagetimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.NotificationMessageInfo} returns this
 */
proto.wa.NotificationMessageInfo.prototype.clearMessagetimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.NotificationMessageInfo.prototype.hasMessagetimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string participant = 4;
 * @return {string}
 */
proto.wa.NotificationMessageInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.NotificationMessageInfo} returns this
 */
proto.wa.NotificationMessageInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.NotificationMessageInfo} returns this
 */
proto.wa.NotificationMessageInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.NotificationMessageInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.WebNotificationsInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.WebNotificationsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.WebNotificationsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.WebNotificationsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.WebNotificationsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    unreadchats: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    notifymessagecount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    notifymessagesList: jspb.Message.toObjectList(msg.getNotifymessagesList(),
    proto.wa.WebMessageInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.WebNotificationsInfo}
 */
proto.wa.WebNotificationsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.WebNotificationsInfo;
  return proto.wa.WebNotificationsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.WebNotificationsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.WebNotificationsInfo}
 */
proto.wa.WebNotificationsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadchats(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNotifymessagecount(value);
      break;
    case 5:
      var value = new proto.wa.WebMessageInfo;
      reader.readMessage(value,proto.wa.WebMessageInfo.deserializeBinaryFromReader);
      msg.addNotifymessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.WebNotificationsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.WebNotificationsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.WebNotificationsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.WebNotificationsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNotifymessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.wa.WebMessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.wa.WebNotificationsInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.WebNotificationsInfo} returns this
 */
proto.wa.WebNotificationsInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebNotificationsInfo} returns this
 */
proto.wa.WebNotificationsInfo.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebNotificationsInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 unreadChats = 3;
 * @return {number}
 */
proto.wa.WebNotificationsInfo.prototype.getUnreadchats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.WebNotificationsInfo} returns this
 */
proto.wa.WebNotificationsInfo.prototype.setUnreadchats = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebNotificationsInfo} returns this
 */
proto.wa.WebNotificationsInfo.prototype.clearUnreadchats = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebNotificationsInfo.prototype.hasUnreadchats = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 notifyMessageCount = 4;
 * @return {number}
 */
proto.wa.WebNotificationsInfo.prototype.getNotifymessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.WebNotificationsInfo} returns this
 */
proto.wa.WebNotificationsInfo.prototype.setNotifymessagecount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebNotificationsInfo} returns this
 */
proto.wa.WebNotificationsInfo.prototype.clearNotifymessagecount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebNotificationsInfo.prototype.hasNotifymessagecount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated WebMessageInfo notifyMessages = 5;
 * @return {!Array<!proto.wa.WebMessageInfo>}
 */
proto.wa.WebNotificationsInfo.prototype.getNotifymessagesList = function() {
  return /** @type{!Array<!proto.wa.WebMessageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wa.WebMessageInfo, 5));
};


/**
 * @param {!Array<!proto.wa.WebMessageInfo>} value
 * @return {!proto.wa.WebNotificationsInfo} returns this
*/
proto.wa.WebNotificationsInfo.prototype.setNotifymessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.wa.WebMessageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wa.WebMessageInfo}
 */
proto.wa.WebNotificationsInfo.prototype.addNotifymessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.wa.WebMessageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.WebNotificationsInfo} returns this
 */
proto.wa.WebNotificationsInfo.prototype.clearNotifymessagesList = function() {
  return this.setNotifymessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.PaymentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.PaymentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.PaymentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.PaymentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencydeprecated: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount1000: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    receiverjid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    transactiontimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    requestmessagekey: (f = msg.getRequestmessagekey()) && proto.wa.MessageKey.toObject(includeInstance, f),
    expirytimestamp: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    futureproofed: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    currency: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    txnstatus: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.PaymentInfo}
 */
proto.wa.PaymentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.PaymentInfo;
  return proto.wa.PaymentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.PaymentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.PaymentInfo}
 */
proto.wa.PaymentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (reader.readEnum());
      msg.setCurrencydeprecated(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount1000(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiverjid(value);
      break;
    case 4:
      var value = /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_STATUS} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransactiontimestamp(value);
      break;
    case 6:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setRequestmessagekey(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpirytimestamp(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFutureproofed(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 10:
      var value = /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (reader.readEnum());
      msg.setTxnstatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.PaymentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.PaymentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.PaymentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.PaymentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_STATUS} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getRequestmessagekey();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.PaymentInfo.PAYMENT_INFO_CURRENCY = {
  UNKNOWN_CURRENCY: 0,
  INR: 1
};

/**
 * @enum {number}
 */
proto.wa.PaymentInfo.PAYMENT_INFO_STATUS = {
  UNKNOWN_STATUS: 0,
  PROCESSING: 1,
  SENT: 2,
  NEED_TO_ACCEPT: 3,
  COMPLETE: 4,
  COULD_NOT_COMPLETE: 5,
  REFUNDED: 6,
  EXPIRED: 7,
  REJECTED: 8,
  CANCELLED: 9,
  WAITING_FOR_PAYER: 10,
  WAITING: 11
};

/**
 * @enum {number}
 */
proto.wa.PaymentInfo.PAYMENT_INFO_TXNSTATUS = {
  UNKNOWN: 0,
  PENDING_SETUP: 1,
  PENDING_RECEIVER_SETUP: 2,
  INIT: 3,
  SUCCESS: 4,
  COMPLETED: 5,
  FAILED: 6,
  FAILED_RISK: 7,
  FAILED_PROCESSING: 8,
  FAILED_RECEIVER_PROCESSING: 9,
  FAILED_DA: 10,
  FAILED_DA_FINAL: 11,
  REFUNDED_TXN: 12,
  REFUND_FAILED: 13,
  REFUND_FAILED_PROCESSING: 14,
  REFUND_FAILED_DA: 15,
  EXPIRED_TXN: 16,
  AUTH_CANCELED: 17,
  AUTH_CANCEL_FAILED_PROCESSING: 18,
  AUTH_CANCEL_FAILED: 19,
  COLLECT_INIT: 20,
  COLLECT_SUCCESS: 21,
  COLLECT_FAILED: 22,
  COLLECT_FAILED_RISK: 23,
  COLLECT_REJECTED: 24,
  COLLECT_EXPIRED: 25,
  COLLECT_CANCELED: 26,
  COLLECT_CANCELLING: 27
};

/**
 * optional PAYMENT_INFO_CURRENCY currencyDeprecated = 1;
 * @return {!proto.wa.PaymentInfo.PAYMENT_INFO_CURRENCY}
 */
proto.wa.PaymentInfo.prototype.getCurrencydeprecated = function() {
  return /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.wa.PaymentInfo.PAYMENT_INFO_CURRENCY} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setCurrencydeprecated = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearCurrencydeprecated = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasCurrencydeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount1000 = 2;
 * @return {number}
 */
proto.wa.PaymentInfo.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string receiverJid = 3;
 * @return {string}
 */
proto.wa.PaymentInfo.prototype.getReceiverjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setReceiverjid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearReceiverjid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasReceiverjid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PAYMENT_INFO_STATUS status = 4;
 * @return {!proto.wa.PaymentInfo.PAYMENT_INFO_STATUS}
 */
proto.wa.PaymentInfo.prototype.getStatus = function() {
  return /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_STATUS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.wa.PaymentInfo.PAYMENT_INFO_STATUS} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 transactionTimestamp = 5;
 * @return {number}
 */
proto.wa.PaymentInfo.prototype.getTransactiontimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setTransactiontimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearTransactiontimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasTransactiontimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MessageKey requestMessageKey = 6;
 * @return {?proto.wa.MessageKey}
 */
proto.wa.PaymentInfo.prototype.getRequestmessagekey = function() {
  return /** @type{?proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 6));
};


/**
 * @param {?proto.wa.MessageKey|undefined} value
 * @return {!proto.wa.PaymentInfo} returns this
*/
proto.wa.PaymentInfo.prototype.setRequestmessagekey = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearRequestmessagekey = function() {
  return this.setRequestmessagekey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasRequestmessagekey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 expiryTimestamp = 7;
 * @return {number}
 */
proto.wa.PaymentInfo.prototype.getExpirytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setExpirytimestamp = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearExpirytimestamp = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasExpirytimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool futureproofed = 8;
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.getFutureproofed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setFutureproofed = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearFutureproofed = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasFutureproofed = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string currency = 9;
 * @return {string}
 */
proto.wa.PaymentInfo.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearCurrency = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PAYMENT_INFO_TXNSTATUS txnStatus = 10;
 * @return {!proto.wa.PaymentInfo.PAYMENT_INFO_TXNSTATUS}
 */
proto.wa.PaymentInfo.prototype.getTxnstatus = function() {
  return /** @type {!proto.wa.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.wa.PaymentInfo.PAYMENT_INFO_TXNSTATUS} value
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.setTxnstatus = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.PaymentInfo} returns this
 */
proto.wa.PaymentInfo.prototype.clearTxnstatus = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.PaymentInfo.prototype.hasTxnstatus = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wa.WebMessageInfo.repeatedFields_ = [26,28];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wa.WebMessageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.wa.WebMessageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wa.WebMessageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.WebMessageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.wa.MessageKey.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.wa.Message.toObject(includeInstance, f),
    messagetimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    ignore: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    starred: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    broadcast: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    pushname: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    mediaciphertextsha256: msg.getMediaciphertextsha256_asB64(),
    multicast: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f,
    urltext: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    urlnumber: (f = jspb.Message.getBooleanField(msg, 23)) == null ? undefined : f,
    messagestubtype: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    clearmedia: (f = jspb.Message.getBooleanField(msg, 25)) == null ? undefined : f,
    messagestubparametersList: (f = jspb.Message.getRepeatedField(msg, 26)) == null ? undefined : f,
    duration: (f = jspb.Message.getField(msg, 27)) == null ? undefined : f,
    labelsList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
    paymentinfo: (f = msg.getPaymentinfo()) && proto.wa.PaymentInfo.toObject(includeInstance, f),
    finallivelocation: (f = msg.getFinallivelocation()) && proto.wa.LiveLocationMessage.toObject(includeInstance, f),
    quotedpaymentinfo: (f = msg.getQuotedpaymentinfo()) && proto.wa.PaymentInfo.toObject(includeInstance, f),
    ephemeralstarttimestamp: (f = jspb.Message.getField(msg, 32)) == null ? undefined : f,
    ephemeralduration: (f = jspb.Message.getField(msg, 33)) == null ? undefined : f,
    ephemeralofftoon: (f = jspb.Message.getBooleanField(msg, 34)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wa.WebMessageInfo}
 */
proto.wa.WebMessageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wa.WebMessageInfo;
  return proto.wa.WebMessageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wa.WebMessageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wa.WebMessageInfo}
 */
proto.wa.WebMessageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wa.MessageKey;
      reader.readMessage(value,proto.wa.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.wa.Message;
      reader.readMessage(value,proto.wa.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessagetimestamp(value);
      break;
    case 4:
      var value = /** @type {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnore(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStarred(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBroadcast(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPushname(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediaciphertextsha256(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMulticast(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUrltext(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUrlnumber(value);
      break;
    case 24:
      var value = /** @type {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (reader.readEnum());
      msg.setMessagestubtype(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearmedia(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.addMessagestubparameters(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 29:
      var value = new proto.wa.PaymentInfo;
      reader.readMessage(value,proto.wa.PaymentInfo.deserializeBinaryFromReader);
      msg.setPaymentinfo(value);
      break;
    case 30:
      var value = new proto.wa.LiveLocationMessage;
      reader.readMessage(value,proto.wa.LiveLocationMessage.deserializeBinaryFromReader);
      msg.setFinallivelocation(value);
      break;
    case 31:
      var value = new proto.wa.PaymentInfo;
      reader.readMessage(value,proto.wa.PaymentInfo.deserializeBinaryFromReader);
      msg.setQuotedpaymentinfo(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEphemeralstarttimestamp(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEphemeralduration(value);
      break;
    case 34:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEphemeralofftoon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wa.WebMessageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wa.WebMessageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wa.WebMessageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wa.WebMessageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wa.MessageKey.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wa.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBytes(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBool(
      23,
      f
    );
  }
  f = /** @type {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getMessagestubparametersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeUint32(
      27,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getPaymentinfo();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.wa.PaymentInfo.serializeBinaryToWriter
    );
  }
  f = message.getFinallivelocation();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.wa.LiveLocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getQuotedpaymentinfo();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.wa.PaymentInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeUint64(
      32,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeUint32(
      33,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeBool(
      34,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STATUS = {
  ERROR: 0,
  PENDING: 1,
  SERVER_ACK: 2,
  DELIVERY_ACK: 3,
  READ: 4,
  PLAYED: 5
};

/**
 * @enum {number}
 */
proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE = {
  UNKNOWN: 0,
  REVOKE: 1,
  CIPHERTEXT: 2,
  FUTUREPROOF: 3,
  NON_VERIFIED_TRANSITION: 4,
  UNVERIFIED_TRANSITION: 5,
  VERIFIED_TRANSITION: 6,
  VERIFIED_LOW_UNKNOWN: 7,
  VERIFIED_HIGH: 8,
  VERIFIED_INITIAL_UNKNOWN: 9,
  VERIFIED_INITIAL_LOW: 10,
  VERIFIED_INITIAL_HIGH: 11,
  VERIFIED_TRANSITION_ANY_TO_NONE: 12,
  VERIFIED_TRANSITION_ANY_TO_HIGH: 13,
  VERIFIED_TRANSITION_HIGH_TO_LOW: 14,
  VERIFIED_TRANSITION_HIGH_TO_UNKNOWN: 15,
  VERIFIED_TRANSITION_UNKNOWN_TO_LOW: 16,
  VERIFIED_TRANSITION_LOW_TO_UNKNOWN: 17,
  VERIFIED_TRANSITION_NONE_TO_LOW: 18,
  VERIFIED_TRANSITION_NONE_TO_UNKNOWN: 19,
  GROUP_CREATE: 20,
  GROUP_CHANGE_SUBJECT: 21,
  GROUP_CHANGE_ICON: 22,
  GROUP_CHANGE_INVITE_LINK: 23,
  GROUP_CHANGE_DESCRIPTION: 24,
  GROUP_CHANGE_RESTRICT: 25,
  GROUP_CHANGE_ANNOUNCE: 26,
  GROUP_PARTICIPANT_ADD: 27,
  GROUP_PARTICIPANT_REMOVE: 28,
  GROUP_PARTICIPANT_PROMOTE: 29,
  GROUP_PARTICIPANT_DEMOTE: 30,
  GROUP_PARTICIPANT_INVITE: 31,
  GROUP_PARTICIPANT_LEAVE: 32,
  GROUP_PARTICIPANT_CHANGE_NUMBER: 33,
  BROADCAST_CREATE: 34,
  BROADCAST_ADD: 35,
  BROADCAST_REMOVE: 36,
  GENERIC_NOTIFICATION: 37,
  E2E_IDENTITY_CHANGED: 38,
  E2E_ENCRYPTED: 39,
  CALL_MISSED_VOICE: 40,
  CALL_MISSED_VIDEO: 41,
  INDIVIDUAL_CHANGE_NUMBER: 42,
  GROUP_DELETE: 43,
  GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE: 44,
  CALL_MISSED_GROUP_VOICE: 45,
  CALL_MISSED_GROUP_VIDEO: 46,
  PAYMENT_CIPHERTEXT: 47,
  PAYMENT_FUTUREPROOF: 48,
  PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED: 49,
  PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED: 50,
  PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED: 51,
  PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP: 52,
  PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP: 53,
  PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER: 54,
  PAYMENT_ACTION_SEND_PAYMENT_REMINDER: 55,
  PAYMENT_ACTION_SEND_PAYMENT_INVITATION: 56,
  PAYMENT_ACTION_REQUEST_DECLINED: 57,
  PAYMENT_ACTION_REQUEST_EXPIRED: 58,
  PAYMENT_ACTION_REQUEST_CANCELLED: 59,
  BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM: 60,
  BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP: 61,
  BIZ_INTRO_TOP: 62,
  BIZ_INTRO_BOTTOM: 63,
  BIZ_NAME_CHANGE: 64,
  BIZ_MOVE_TO_CONSUMER_APP: 65,
  BIZ_TWO_TIER_MIGRATION_TOP: 66,
  BIZ_TWO_TIER_MIGRATION_BOTTOM: 67,
  OVERSIZED: 68,
  GROUP_CHANGE_NO_FREQUENTLY_FORWARDED: 69,
  GROUP_V4_ADD_INVITE_SENT: 70,
  GROUP_PARTICIPANT_ADD_REQUEST_JOIN: 71,
  CHANGE_EPHEMERAL_SETTING: 72
};

/**
 * required MessageKey key = 1;
 * @return {!proto.wa.MessageKey}
 */
proto.wa.WebMessageInfo.prototype.getKey = function() {
  return /** @type{!proto.wa.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.wa.MessageKey, 1, 1));
};


/**
 * @param {!proto.wa.MessageKey} value
 * @return {!proto.wa.WebMessageInfo} returns this
*/
proto.wa.WebMessageInfo.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.wa.Message}
 */
proto.wa.WebMessageInfo.prototype.getMessage = function() {
  return /** @type{?proto.wa.Message} */ (
    jspb.Message.getWrapperField(this, proto.wa.Message, 2));
};


/**
 * @param {?proto.wa.Message|undefined} value
 * @return {!proto.wa.WebMessageInfo} returns this
*/
proto.wa.WebMessageInfo.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 messageTimestamp = 3;
 * @return {number}
 */
proto.wa.WebMessageInfo.prototype.getMessagetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setMessagetimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearMessagetimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasMessagetimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WEB_MESSAGE_INFO_STATUS status = 4;
 * @return {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STATUS}
 */
proto.wa.WebMessageInfo.prototype.getStatus = function() {
  return /** @type {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string participant = 5;
 * @return {string}
 */
proto.wa.WebMessageInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool ignore = 16;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setIgnore = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearIgnore = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasIgnore = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool starred = 17;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setStarred = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearStarred = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasStarred = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool broadcast = 18;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getBroadcast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setBroadcast = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearBroadcast = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasBroadcast = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string pushName = 19;
 * @return {string}
 */
proto.wa.WebMessageInfo.prototype.getPushname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setPushname = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearPushname = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasPushname = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * @return {!(string|Uint8Array)}
 */
proto.wa.WebMessageInfo.prototype.getMediaciphertextsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * This is a type-conversion wrapper around `getMediaciphertextsha256()`
 * @return {string}
 */
proto.wa.WebMessageInfo.prototype.getMediaciphertextsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediaciphertextsha256()));
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediaciphertextsha256()`
 * @return {!Uint8Array}
 */
proto.wa.WebMessageInfo.prototype.getMediaciphertextsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediaciphertextsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setMediaciphertextsha256 = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearMediaciphertextsha256 = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasMediaciphertextsha256 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool multicast = 21;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getMulticast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setMulticast = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearMulticast = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasMulticast = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool urlText = 22;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getUrltext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setUrltext = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearUrltext = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasUrltext = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool urlNumber = 23;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getUrlnumber = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setUrlnumber = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearUrlnumber = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasUrlnumber = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional WEB_MESSAGE_INFO_STUBTYPE messageStubType = 24;
 * @return {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE}
 */
proto.wa.WebMessageInfo.prototype.getMessagestubtype = function() {
  return /** @type {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.wa.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setMessagestubtype = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearMessagestubtype = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasMessagestubtype = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional bool clearMedia = 25;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getClearmedia = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setClearmedia = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearClearmedia = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasClearmedia = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * repeated string messageStubParameters = 26;
 * @return {!Array<string>}
 */
proto.wa.WebMessageInfo.prototype.getMessagestubparametersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setMessagestubparametersList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.addMessagestubparameters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearMessagestubparametersList = function() {
  return this.setMessagestubparametersList([]);
};


/**
 * optional uint32 duration = 27;
 * @return {number}
 */
proto.wa.WebMessageInfo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setDuration = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearDuration = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * repeated string labels = 28;
 * @return {!Array<string>}
 */
proto.wa.WebMessageInfo.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional PaymentInfo paymentInfo = 29;
 * @return {?proto.wa.PaymentInfo}
 */
proto.wa.WebMessageInfo.prototype.getPaymentinfo = function() {
  return /** @type{?proto.wa.PaymentInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.PaymentInfo, 29));
};


/**
 * @param {?proto.wa.PaymentInfo|undefined} value
 * @return {!proto.wa.WebMessageInfo} returns this
*/
proto.wa.WebMessageInfo.prototype.setPaymentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearPaymentinfo = function() {
  return this.setPaymentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasPaymentinfo = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional LiveLocationMessage finalLiveLocation = 30;
 * @return {?proto.wa.LiveLocationMessage}
 */
proto.wa.WebMessageInfo.prototype.getFinallivelocation = function() {
  return /** @type{?proto.wa.LiveLocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.wa.LiveLocationMessage, 30));
};


/**
 * @param {?proto.wa.LiveLocationMessage|undefined} value
 * @return {!proto.wa.WebMessageInfo} returns this
*/
proto.wa.WebMessageInfo.prototype.setFinallivelocation = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearFinallivelocation = function() {
  return this.setFinallivelocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasFinallivelocation = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional PaymentInfo quotedPaymentInfo = 31;
 * @return {?proto.wa.PaymentInfo}
 */
proto.wa.WebMessageInfo.prototype.getQuotedpaymentinfo = function() {
  return /** @type{?proto.wa.PaymentInfo} */ (
    jspb.Message.getWrapperField(this, proto.wa.PaymentInfo, 31));
};


/**
 * @param {?proto.wa.PaymentInfo|undefined} value
 * @return {!proto.wa.WebMessageInfo} returns this
*/
proto.wa.WebMessageInfo.prototype.setQuotedpaymentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearQuotedpaymentinfo = function() {
  return this.setQuotedpaymentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasQuotedpaymentinfo = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional uint64 ephemeralStartTimestamp = 32;
 * @return {number}
 */
proto.wa.WebMessageInfo.prototype.getEphemeralstarttimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setEphemeralstarttimestamp = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearEphemeralstarttimestamp = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasEphemeralstarttimestamp = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional uint32 ephemeralDuration = 33;
 * @return {number}
 */
proto.wa.WebMessageInfo.prototype.getEphemeralduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setEphemeralduration = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearEphemeralduration = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasEphemeralduration = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional bool ephemeralOffToOn = 34;
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.getEphemeralofftoon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.setEphemeralofftoon = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wa.WebMessageInfo} returns this
 */
proto.wa.WebMessageInfo.prototype.clearEphemeralofftoon = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wa.WebMessageInfo.prototype.hasEphemeralofftoon = function() {
  return jspb.Message.getField(this, 34) != null;
};


goog.object.extend(exports, proto.wa);
