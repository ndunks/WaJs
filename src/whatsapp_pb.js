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

goog.exportSymbol('proto.proto.AdReplyInfo', null, global);
goog.exportSymbol('proto.proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE', null, global);
goog.exportSymbol('proto.proto.AudioMessage', null, global);
goog.exportSymbol('proto.proto.Call', null, global);
goog.exportSymbol('proto.proto.CallButton', null, global);
goog.exportSymbol('proto.proto.CancelPaymentRequestMessage', null, global);
goog.exportSymbol('proto.proto.CatalogSnapshot', null, global);
goog.exportSymbol('proto.proto.Chat', null, global);
goog.exportSymbol('proto.proto.ContactMessage', null, global);
goog.exportSymbol('proto.proto.ContactsArrayMessage', null, global);
goog.exportSymbol('proto.proto.ContextInfo', null, global);
goog.exportSymbol('proto.proto.DeclinePaymentRequestMessage', null, global);
goog.exportSymbol('proto.proto.DeviceSentMessage', null, global);
goog.exportSymbol('proto.proto.DocumentMessage', null, global);
goog.exportSymbol('proto.proto.ExtendedTextMessage', null, global);
goog.exportSymbol('proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE', null, global);
goog.exportSymbol('proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE', null, global);
goog.exportSymbol('proto.proto.FourRowTemplate', null, global);
goog.exportSymbol('proto.proto.FourRowTemplate.TitleCase', null, global);
goog.exportSymbol('proto.proto.GroupInviteMessage', null, global);
goog.exportSymbol('proto.proto.HSMCurrency', null, global);
goog.exportSymbol('proto.proto.HSMDateTime', null, global);
goog.exportSymbol('proto.proto.HSMDateTime.DatetimeoneofCase', null, global);
goog.exportSymbol('proto.proto.HSMDateTimeComponent', null, global);
goog.exportSymbol('proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE', null, global);
goog.exportSymbol('proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE', null, global);
goog.exportSymbol('proto.proto.HSMDateTimeUnixEpoch', null, global);
goog.exportSymbol('proto.proto.HSMLocalizableParameter', null, global);
goog.exportSymbol('proto.proto.HSMLocalizableParameter.ParamoneofCase', null, global);
goog.exportSymbol('proto.proto.HighlyStructuredMessage', null, global);
goog.exportSymbol('proto.proto.HistorySyncNotification', null, global);
goog.exportSymbol('proto.proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE', null, global);
goog.exportSymbol('proto.proto.HydratedCallButton', null, global);
goog.exportSymbol('proto.proto.HydratedFourRowTemplate', null, global);
goog.exportSymbol('proto.proto.HydratedFourRowTemplate.TitleCase', null, global);
goog.exportSymbol('proto.proto.HydratedQuickReplyButton', null, global);
goog.exportSymbol('proto.proto.HydratedTemplateButton', null, global);
goog.exportSymbol('proto.proto.HydratedTemplateButton.HydratedbuttonCase', null, global);
goog.exportSymbol('proto.proto.HydratedURLButton', null, global);
goog.exportSymbol('proto.proto.ImageMessage', null, global);
goog.exportSymbol('proto.proto.InteractiveAnnotation', null, global);
goog.exportSymbol('proto.proto.InteractiveAnnotation.ActionCase', null, global);
goog.exportSymbol('proto.proto.LiveLocationMessage', null, global);
goog.exportSymbol('proto.proto.Location', null, global);
goog.exportSymbol('proto.proto.LocationMessage', null, global);
goog.exportSymbol('proto.proto.Message', null, global);
goog.exportSymbol('proto.proto.MessageKey', null, global);
goog.exportSymbol('proto.proto.NotificationMessageInfo', null, global);
goog.exportSymbol('proto.proto.PaymentInfo', null, global);
goog.exportSymbol('proto.proto.PaymentInfo.PAYMENT_INFO_CURRENCY', null, global);
goog.exportSymbol('proto.proto.PaymentInfo.PAYMENT_INFO_STATUS', null, global);
goog.exportSymbol('proto.proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS', null, global);
goog.exportSymbol('proto.proto.Point', null, global);
goog.exportSymbol('proto.proto.ProductMessage', null, global);
goog.exportSymbol('proto.proto.ProductSnapshot', null, global);
goog.exportSymbol('proto.proto.ProtocolMessage', null, global);
goog.exportSymbol('proto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE', null, global);
goog.exportSymbol('proto.proto.QuickReplyButton', null, global);
goog.exportSymbol('proto.proto.RequestPaymentMessage', null, global);
goog.exportSymbol('proto.proto.SendPaymentMessage', null, global);
goog.exportSymbol('proto.proto.SenderKeyDistributionMessage', null, global);
goog.exportSymbol('proto.proto.StickerMessage', null, global);
goog.exportSymbol('proto.proto.TabletNotificationsInfo', null, global);
goog.exportSymbol('proto.proto.TemplateButton', null, global);
goog.exportSymbol('proto.proto.TemplateButton.ButtonCase', null, global);
goog.exportSymbol('proto.proto.TemplateButtonReplyMessage', null, global);
goog.exportSymbol('proto.proto.TemplateMessage', null, global);
goog.exportSymbol('proto.proto.TemplateMessage.FormatCase', null, global);
goog.exportSymbol('proto.proto.URLButton', null, global);
goog.exportSymbol('proto.proto.VideoMessage', null, global);
goog.exportSymbol('proto.proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION', null, global);
goog.exportSymbol('proto.proto.WebFeatures', null, global);
goog.exportSymbol('proto.proto.WebFeatures.WEB_FEATURES_FLAG', null, global);
goog.exportSymbol('proto.proto.WebMessageInfo', null, global);
goog.exportSymbol('proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS', null, global);
goog.exportSymbol('proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE', null, global);
goog.exportSymbol('proto.proto.WebNotificationsInfo', null, global);
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
proto.proto.HydratedQuickReplyButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HydratedQuickReplyButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HydratedQuickReplyButton.displayName = 'proto.proto.HydratedQuickReplyButton';
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
proto.proto.HydratedURLButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HydratedURLButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HydratedURLButton.displayName = 'proto.proto.HydratedURLButton';
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
proto.proto.HydratedCallButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HydratedCallButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HydratedCallButton.displayName = 'proto.proto.HydratedCallButton';
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
proto.proto.HydratedTemplateButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.HydratedTemplateButton.oneofGroups_);
};
goog.inherits(proto.proto.HydratedTemplateButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HydratedTemplateButton.displayName = 'proto.proto.HydratedTemplateButton';
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
proto.proto.QuickReplyButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.QuickReplyButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.QuickReplyButton.displayName = 'proto.proto.QuickReplyButton';
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
proto.proto.URLButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.URLButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.URLButton.displayName = 'proto.proto.URLButton';
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
proto.proto.CallButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CallButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CallButton.displayName = 'proto.proto.CallButton';
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
proto.proto.TemplateButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.TemplateButton.oneofGroups_);
};
goog.inherits(proto.proto.TemplateButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TemplateButton.displayName = 'proto.proto.TemplateButton';
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
proto.proto.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Location.displayName = 'proto.proto.Location';
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
proto.proto.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Point.displayName = 'proto.proto.Point';
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
proto.proto.InteractiveAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.InteractiveAnnotation.repeatedFields_, proto.proto.InteractiveAnnotation.oneofGroups_);
};
goog.inherits(proto.proto.InteractiveAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.InteractiveAnnotation.displayName = 'proto.proto.InteractiveAnnotation';
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
proto.proto.AdReplyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AdReplyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AdReplyInfo.displayName = 'proto.proto.AdReplyInfo';
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
proto.proto.ContextInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ContextInfo.repeatedFields_, null);
};
goog.inherits(proto.proto.ContextInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ContextInfo.displayName = 'proto.proto.ContextInfo';
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
proto.proto.SenderKeyDistributionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SenderKeyDistributionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SenderKeyDistributionMessage.displayName = 'proto.proto.SenderKeyDistributionMessage';
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
proto.proto.ImageMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ImageMessage.repeatedFields_, null);
};
goog.inherits(proto.proto.ImageMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ImageMessage.displayName = 'proto.proto.ImageMessage';
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
proto.proto.ContactMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ContactMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ContactMessage.displayName = 'proto.proto.ContactMessage';
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
proto.proto.LocationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.LocationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.LocationMessage.displayName = 'proto.proto.LocationMessage';
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
proto.proto.ExtendedTextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ExtendedTextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ExtendedTextMessage.displayName = 'proto.proto.ExtendedTextMessage';
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
proto.proto.DocumentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.DocumentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DocumentMessage.displayName = 'proto.proto.DocumentMessage';
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
proto.proto.AudioMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AudioMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AudioMessage.displayName = 'proto.proto.AudioMessage';
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
proto.proto.VideoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.VideoMessage.repeatedFields_, null);
};
goog.inherits(proto.proto.VideoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.VideoMessage.displayName = 'proto.proto.VideoMessage';
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
proto.proto.Call = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Call, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Call.displayName = 'proto.proto.Call';
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
proto.proto.Chat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Chat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Chat.displayName = 'proto.proto.Chat';
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
proto.proto.ProtocolMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProtocolMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProtocolMessage.displayName = 'proto.proto.ProtocolMessage';
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
proto.proto.HistorySyncNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HistorySyncNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HistorySyncNotification.displayName = 'proto.proto.HistorySyncNotification';
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
proto.proto.ContactsArrayMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ContactsArrayMessage.repeatedFields_, null);
};
goog.inherits(proto.proto.ContactsArrayMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ContactsArrayMessage.displayName = 'proto.proto.ContactsArrayMessage';
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
proto.proto.HSMCurrency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HSMCurrency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HSMCurrency.displayName = 'proto.proto.HSMCurrency';
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
proto.proto.HSMDateTimeComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HSMDateTimeComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HSMDateTimeComponent.displayName = 'proto.proto.HSMDateTimeComponent';
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
proto.proto.HSMDateTimeUnixEpoch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HSMDateTimeUnixEpoch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HSMDateTimeUnixEpoch.displayName = 'proto.proto.HSMDateTimeUnixEpoch';
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
proto.proto.HSMDateTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.HSMDateTime.oneofGroups_);
};
goog.inherits(proto.proto.HSMDateTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HSMDateTime.displayName = 'proto.proto.HSMDateTime';
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
proto.proto.HSMLocalizableParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.HSMLocalizableParameter.oneofGroups_);
};
goog.inherits(proto.proto.HSMLocalizableParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HSMLocalizableParameter.displayName = 'proto.proto.HSMLocalizableParameter';
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
proto.proto.HighlyStructuredMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.HighlyStructuredMessage.repeatedFields_, null);
};
goog.inherits(proto.proto.HighlyStructuredMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HighlyStructuredMessage.displayName = 'proto.proto.HighlyStructuredMessage';
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
proto.proto.SendPaymentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SendPaymentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SendPaymentMessage.displayName = 'proto.proto.SendPaymentMessage';
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
proto.proto.RequestPaymentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.RequestPaymentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RequestPaymentMessage.displayName = 'proto.proto.RequestPaymentMessage';
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
proto.proto.DeclinePaymentRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.DeclinePaymentRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeclinePaymentRequestMessage.displayName = 'proto.proto.DeclinePaymentRequestMessage';
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
proto.proto.CancelPaymentRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CancelPaymentRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CancelPaymentRequestMessage.displayName = 'proto.proto.CancelPaymentRequestMessage';
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
proto.proto.LiveLocationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.LiveLocationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.LiveLocationMessage.displayName = 'proto.proto.LiveLocationMessage';
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
proto.proto.StickerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.StickerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.StickerMessage.displayName = 'proto.proto.StickerMessage';
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
proto.proto.FourRowTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.FourRowTemplate.repeatedFields_, proto.proto.FourRowTemplate.oneofGroups_);
};
goog.inherits(proto.proto.FourRowTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FourRowTemplate.displayName = 'proto.proto.FourRowTemplate';
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
proto.proto.HydratedFourRowTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.HydratedFourRowTemplate.repeatedFields_, proto.proto.HydratedFourRowTemplate.oneofGroups_);
};
goog.inherits(proto.proto.HydratedFourRowTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HydratedFourRowTemplate.displayName = 'proto.proto.HydratedFourRowTemplate';
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
proto.proto.TemplateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.TemplateMessage.oneofGroups_);
};
goog.inherits(proto.proto.TemplateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TemplateMessage.displayName = 'proto.proto.TemplateMessage';
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
proto.proto.TemplateButtonReplyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TemplateButtonReplyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TemplateButtonReplyMessage.displayName = 'proto.proto.TemplateButtonReplyMessage';
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
proto.proto.CatalogSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CatalogSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CatalogSnapshot.displayName = 'proto.proto.CatalogSnapshot';
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
proto.proto.ProductSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProductSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProductSnapshot.displayName = 'proto.proto.ProductSnapshot';
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
proto.proto.ProductMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProductMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProductMessage.displayName = 'proto.proto.ProductMessage';
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
proto.proto.GroupInviteMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GroupInviteMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GroupInviteMessage.displayName = 'proto.proto.GroupInviteMessage';
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
proto.proto.DeviceSentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.DeviceSentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeviceSentMessage.displayName = 'proto.proto.DeviceSentMessage';
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
proto.proto.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Message.displayName = 'proto.proto.Message';
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
proto.proto.MessageKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.MessageKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.MessageKey.displayName = 'proto.proto.MessageKey';
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
proto.proto.WebFeatures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WebFeatures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WebFeatures.displayName = 'proto.proto.WebFeatures';
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
proto.proto.TabletNotificationsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.TabletNotificationsInfo.repeatedFields_, null);
};
goog.inherits(proto.proto.TabletNotificationsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TabletNotificationsInfo.displayName = 'proto.proto.TabletNotificationsInfo';
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
proto.proto.NotificationMessageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.NotificationMessageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.NotificationMessageInfo.displayName = 'proto.proto.NotificationMessageInfo';
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
proto.proto.WebNotificationsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WebNotificationsInfo.repeatedFields_, null);
};
goog.inherits(proto.proto.WebNotificationsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WebNotificationsInfo.displayName = 'proto.proto.WebNotificationsInfo';
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
proto.proto.PaymentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PaymentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PaymentInfo.displayName = 'proto.proto.PaymentInfo';
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
proto.proto.WebMessageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WebMessageInfo.repeatedFields_, null);
};
goog.inherits(proto.proto.WebMessageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WebMessageInfo.displayName = 'proto.proto.WebMessageInfo';
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
proto.proto.HydratedQuickReplyButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HydratedQuickReplyButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HydratedQuickReplyButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedQuickReplyButton.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HydratedQuickReplyButton}
 */
proto.proto.HydratedQuickReplyButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HydratedQuickReplyButton;
  return proto.proto.HydratedQuickReplyButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HydratedQuickReplyButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HydratedQuickReplyButton}
 */
proto.proto.HydratedQuickReplyButton.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.HydratedQuickReplyButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HydratedQuickReplyButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HydratedQuickReplyButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedQuickReplyButton.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.HydratedQuickReplyButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedQuickReplyButton} returns this
 */
proto.proto.HydratedQuickReplyButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedQuickReplyButton} returns this
 */
proto.proto.HydratedQuickReplyButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedQuickReplyButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.proto.HydratedQuickReplyButton.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedQuickReplyButton} returns this
 */
proto.proto.HydratedQuickReplyButton.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedQuickReplyButton} returns this
 */
proto.proto.HydratedQuickReplyButton.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedQuickReplyButton.prototype.hasId = function() {
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
proto.proto.HydratedURLButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HydratedURLButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HydratedURLButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedURLButton.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HydratedURLButton}
 */
proto.proto.HydratedURLButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HydratedURLButton;
  return proto.proto.HydratedURLButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HydratedURLButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HydratedURLButton}
 */
proto.proto.HydratedURLButton.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.HydratedURLButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HydratedURLButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HydratedURLButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedURLButton.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.HydratedURLButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedURLButton} returns this
 */
proto.proto.HydratedURLButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedURLButton} returns this
 */
proto.proto.HydratedURLButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedURLButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.proto.HydratedURLButton.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedURLButton} returns this
 */
proto.proto.HydratedURLButton.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedURLButton} returns this
 */
proto.proto.HydratedURLButton.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedURLButton.prototype.hasUrl = function() {
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
proto.proto.HydratedCallButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HydratedCallButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HydratedCallButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedCallButton.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HydratedCallButton}
 */
proto.proto.HydratedCallButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HydratedCallButton;
  return proto.proto.HydratedCallButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HydratedCallButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HydratedCallButton}
 */
proto.proto.HydratedCallButton.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.HydratedCallButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HydratedCallButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HydratedCallButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedCallButton.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.HydratedCallButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedCallButton} returns this
 */
proto.proto.HydratedCallButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedCallButton} returns this
 */
proto.proto.HydratedCallButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedCallButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string phoneNumber = 2;
 * @return {string}
 */
proto.proto.HydratedCallButton.prototype.getPhonenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedCallButton} returns this
 */
proto.proto.HydratedCallButton.prototype.setPhonenumber = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedCallButton} returns this
 */
proto.proto.HydratedCallButton.prototype.clearPhonenumber = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedCallButton.prototype.hasPhonenumber = function() {
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
proto.proto.HydratedTemplateButton.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.proto.HydratedTemplateButton.HydratedbuttonCase = {
  HYDRATEDBUTTON_NOT_SET: 0,
  QUICKREPLYBUTTON: 1,
  URLBUTTON: 2,
  CALLBUTTON: 3
};

/**
 * @return {proto.proto.HydratedTemplateButton.HydratedbuttonCase}
 */
proto.proto.HydratedTemplateButton.prototype.getHydratedbuttonCase = function() {
  return /** @type {proto.proto.HydratedTemplateButton.HydratedbuttonCase} */(jspb.Message.computeOneofCase(this, proto.proto.HydratedTemplateButton.oneofGroups_[0]));
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
proto.proto.HydratedTemplateButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HydratedTemplateButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HydratedTemplateButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedTemplateButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    quickreplybutton: (f = msg.getQuickreplybutton()) && proto.proto.HydratedQuickReplyButton.toObject(includeInstance, f),
    urlbutton: (f = msg.getUrlbutton()) && proto.proto.HydratedURLButton.toObject(includeInstance, f),
    callbutton: (f = msg.getCallbutton()) && proto.proto.HydratedCallButton.toObject(includeInstance, f)
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
 * @return {!proto.proto.HydratedTemplateButton}
 */
proto.proto.HydratedTemplateButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HydratedTemplateButton;
  return proto.proto.HydratedTemplateButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HydratedTemplateButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HydratedTemplateButton}
 */
proto.proto.HydratedTemplateButton.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.HydratedQuickReplyButton;
      reader.readMessage(value,proto.proto.HydratedQuickReplyButton.deserializeBinaryFromReader);
      msg.setQuickreplybutton(value);
      break;
    case 2:
      var value = new proto.proto.HydratedURLButton;
      reader.readMessage(value,proto.proto.HydratedURLButton.deserializeBinaryFromReader);
      msg.setUrlbutton(value);
      break;
    case 3:
      var value = new proto.proto.HydratedCallButton;
      reader.readMessage(value,proto.proto.HydratedCallButton.deserializeBinaryFromReader);
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
proto.proto.HydratedTemplateButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HydratedTemplateButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HydratedTemplateButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedTemplateButton.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.HydratedQuickReplyButton.serializeBinaryToWriter
    );
  }
  f = message.getUrlbutton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.HydratedURLButton.serializeBinaryToWriter
    );
  }
  f = message.getCallbutton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.HydratedCallButton.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 4;
 * @return {number}
 */
proto.proto.HydratedTemplateButton.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HydratedTemplateButton} returns this
 */
proto.proto.HydratedTemplateButton.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedTemplateButton} returns this
 */
proto.proto.HydratedTemplateButton.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedTemplateButton.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HydratedQuickReplyButton quickReplyButton = 1;
 * @return {?proto.proto.HydratedQuickReplyButton}
 */
proto.proto.HydratedTemplateButton.prototype.getQuickreplybutton = function() {
  return /** @type{?proto.proto.HydratedQuickReplyButton} */ (
    jspb.Message.getWrapperField(this, proto.proto.HydratedQuickReplyButton, 1));
};


/**
 * @param {?proto.proto.HydratedQuickReplyButton|undefined} value
 * @return {!proto.proto.HydratedTemplateButton} returns this
*/
proto.proto.HydratedTemplateButton.prototype.setQuickreplybutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HydratedTemplateButton} returns this
 */
proto.proto.HydratedTemplateButton.prototype.clearQuickreplybutton = function() {
  return this.setQuickreplybutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedTemplateButton.prototype.hasQuickreplybutton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HydratedURLButton urlButton = 2;
 * @return {?proto.proto.HydratedURLButton}
 */
proto.proto.HydratedTemplateButton.prototype.getUrlbutton = function() {
  return /** @type{?proto.proto.HydratedURLButton} */ (
    jspb.Message.getWrapperField(this, proto.proto.HydratedURLButton, 2));
};


/**
 * @param {?proto.proto.HydratedURLButton|undefined} value
 * @return {!proto.proto.HydratedTemplateButton} returns this
*/
proto.proto.HydratedTemplateButton.prototype.setUrlbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HydratedTemplateButton} returns this
 */
proto.proto.HydratedTemplateButton.prototype.clearUrlbutton = function() {
  return this.setUrlbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedTemplateButton.prototype.hasUrlbutton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HydratedCallButton callButton = 3;
 * @return {?proto.proto.HydratedCallButton}
 */
proto.proto.HydratedTemplateButton.prototype.getCallbutton = function() {
  return /** @type{?proto.proto.HydratedCallButton} */ (
    jspb.Message.getWrapperField(this, proto.proto.HydratedCallButton, 3));
};


/**
 * @param {?proto.proto.HydratedCallButton|undefined} value
 * @return {!proto.proto.HydratedTemplateButton} returns this
*/
proto.proto.HydratedTemplateButton.prototype.setCallbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HydratedTemplateButton} returns this
 */
proto.proto.HydratedTemplateButton.prototype.clearCallbutton = function() {
  return this.setCallbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedTemplateButton.prototype.hasCallbutton = function() {
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
proto.proto.QuickReplyButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.QuickReplyButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.QuickReplyButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.QuickReplyButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f),
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
 * @return {!proto.proto.QuickReplyButton}
 */
proto.proto.QuickReplyButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.QuickReplyButton;
  return proto.proto.QuickReplyButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.QuickReplyButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.QuickReplyButton}
 */
proto.proto.QuickReplyButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
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
proto.proto.QuickReplyButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.QuickReplyButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.QuickReplyButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.QuickReplyButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
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
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.QuickReplyButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.QuickReplyButton} returns this
*/
proto.proto.QuickReplyButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.QuickReplyButton} returns this
 */
proto.proto.QuickReplyButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.QuickReplyButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.proto.QuickReplyButton.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.QuickReplyButton} returns this
 */
proto.proto.QuickReplyButton.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.QuickReplyButton} returns this
 */
proto.proto.QuickReplyButton.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.QuickReplyButton.prototype.hasId = function() {
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
proto.proto.URLButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.URLButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.URLButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.URLButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f),
    url: (f = msg.getUrl()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.URLButton}
 */
proto.proto.URLButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.URLButton;
  return proto.proto.URLButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.URLButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.URLButton}
 */
proto.proto.URLButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
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
proto.proto.URLButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.URLButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.URLButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.URLButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.URLButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.URLButton} returns this
*/
proto.proto.URLButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.URLButton} returns this
 */
proto.proto.URLButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.URLButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage url = 2;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.URLButton.prototype.getUrl = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.URLButton} returns this
*/
proto.proto.URLButton.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.URLButton} returns this
 */
proto.proto.URLButton.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.URLButton.prototype.hasUrl = function() {
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
proto.proto.CallButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CallButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CallButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CallButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f),
    phonenumber: (f = msg.getPhonenumber()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.CallButton}
 */
proto.proto.CallButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CallButton;
  return proto.proto.CallButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CallButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CallButton}
 */
proto.proto.CallButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
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
proto.proto.CallButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CallButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CallButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CallButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getPhonenumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.CallButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.CallButton} returns this
*/
proto.proto.CallButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CallButton} returns this
 */
proto.proto.CallButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CallButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage phoneNumber = 2;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.CallButton.prototype.getPhonenumber = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.CallButton} returns this
*/
proto.proto.CallButton.prototype.setPhonenumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CallButton} returns this
 */
proto.proto.CallButton.prototype.clearPhonenumber = function() {
  return this.setPhonenumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CallButton.prototype.hasPhonenumber = function() {
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
proto.proto.TemplateButton.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.proto.TemplateButton.ButtonCase = {
  BUTTON_NOT_SET: 0,
  QUICKREPLYBUTTON: 1,
  URLBUTTON: 2,
  CALLBUTTON: 3
};

/**
 * @return {proto.proto.TemplateButton.ButtonCase}
 */
proto.proto.TemplateButton.prototype.getButtonCase = function() {
  return /** @type {proto.proto.TemplateButton.ButtonCase} */(jspb.Message.computeOneofCase(this, proto.proto.TemplateButton.oneofGroups_[0]));
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
proto.proto.TemplateButton.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TemplateButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TemplateButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemplateButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    quickreplybutton: (f = msg.getQuickreplybutton()) && proto.proto.QuickReplyButton.toObject(includeInstance, f),
    urlbutton: (f = msg.getUrlbutton()) && proto.proto.URLButton.toObject(includeInstance, f),
    callbutton: (f = msg.getCallbutton()) && proto.proto.CallButton.toObject(includeInstance, f)
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
 * @return {!proto.proto.TemplateButton}
 */
proto.proto.TemplateButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TemplateButton;
  return proto.proto.TemplateButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TemplateButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TemplateButton}
 */
proto.proto.TemplateButton.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.QuickReplyButton;
      reader.readMessage(value,proto.proto.QuickReplyButton.deserializeBinaryFromReader);
      msg.setQuickreplybutton(value);
      break;
    case 2:
      var value = new proto.proto.URLButton;
      reader.readMessage(value,proto.proto.URLButton.deserializeBinaryFromReader);
      msg.setUrlbutton(value);
      break;
    case 3:
      var value = new proto.proto.CallButton;
      reader.readMessage(value,proto.proto.CallButton.deserializeBinaryFromReader);
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
proto.proto.TemplateButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TemplateButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TemplateButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemplateButton.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.QuickReplyButton.serializeBinaryToWriter
    );
  }
  f = message.getUrlbutton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.URLButton.serializeBinaryToWriter
    );
  }
  f = message.getCallbutton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.CallButton.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 4;
 * @return {number}
 */
proto.proto.TemplateButton.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TemplateButton} returns this
 */
proto.proto.TemplateButton.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.TemplateButton} returns this
 */
proto.proto.TemplateButton.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButton.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional QuickReplyButton quickReplyButton = 1;
 * @return {?proto.proto.QuickReplyButton}
 */
proto.proto.TemplateButton.prototype.getQuickreplybutton = function() {
  return /** @type{?proto.proto.QuickReplyButton} */ (
    jspb.Message.getWrapperField(this, proto.proto.QuickReplyButton, 1));
};


/**
 * @param {?proto.proto.QuickReplyButton|undefined} value
 * @return {!proto.proto.TemplateButton} returns this
*/
proto.proto.TemplateButton.prototype.setQuickreplybutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateButton} returns this
 */
proto.proto.TemplateButton.prototype.clearQuickreplybutton = function() {
  return this.setQuickreplybutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButton.prototype.hasQuickreplybutton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional URLButton urlButton = 2;
 * @return {?proto.proto.URLButton}
 */
proto.proto.TemplateButton.prototype.getUrlbutton = function() {
  return /** @type{?proto.proto.URLButton} */ (
    jspb.Message.getWrapperField(this, proto.proto.URLButton, 2));
};


/**
 * @param {?proto.proto.URLButton|undefined} value
 * @return {!proto.proto.TemplateButton} returns this
*/
proto.proto.TemplateButton.prototype.setUrlbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateButton} returns this
 */
proto.proto.TemplateButton.prototype.clearUrlbutton = function() {
  return this.setUrlbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButton.prototype.hasUrlbutton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CallButton callButton = 3;
 * @return {?proto.proto.CallButton}
 */
proto.proto.TemplateButton.prototype.getCallbutton = function() {
  return /** @type{?proto.proto.CallButton} */ (
    jspb.Message.getWrapperField(this, proto.proto.CallButton, 3));
};


/**
 * @param {?proto.proto.CallButton|undefined} value
 * @return {!proto.proto.TemplateButton} returns this
*/
proto.proto.TemplateButton.prototype.setCallbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateButton} returns this
 */
proto.proto.TemplateButton.prototype.clearCallbutton = function() {
  return this.setCallbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButton.prototype.hasCallbutton = function() {
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
proto.proto.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Location.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.Location}
 */
proto.proto.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Location;
  return proto.proto.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Location}
 */
proto.proto.Location.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Location.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.Location.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Location} returns this
 */
proto.proto.Location.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Location} returns this
 */
proto.proto.Location.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Location.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.proto.Location.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Location} returns this
 */
proto.proto.Location.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Location} returns this
 */
proto.proto.Location.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Location.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.proto.Location.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Location} returns this
 */
proto.proto.Location.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Location} returns this
 */
proto.proto.Location.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Location.prototype.hasName = function() {
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
proto.proto.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Point.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.Point}
 */
proto.proto.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Point;
  return proto.proto.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Point}
 */
proto.proto.Point.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Point.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.Point.prototype.getXdeprecated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.setXdeprecated = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.clearXdeprecated = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Point.prototype.hasXdeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 yDeprecated = 2;
 * @return {number}
 */
proto.proto.Point.prototype.getYdeprecated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.setYdeprecated = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.clearYdeprecated = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Point.prototype.hasYdeprecated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double x = 3;
 * @return {number}
 */
proto.proto.Point.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.setX = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.clearX = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Point.prototype.hasX = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double y = 4;
 * @return {number}
 */
proto.proto.Point.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.setY = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Point} returns this
 */
proto.proto.Point.prototype.clearY = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Point.prototype.hasY = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.InteractiveAnnotation.repeatedFields_ = [1];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.InteractiveAnnotation.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.proto.InteractiveAnnotation.ActionCase = {
  ACTION_NOT_SET: 0,
  LOCATION: 2
};

/**
 * @return {proto.proto.InteractiveAnnotation.ActionCase}
 */
proto.proto.InteractiveAnnotation.prototype.getActionCase = function() {
  return /** @type {proto.proto.InteractiveAnnotation.ActionCase} */(jspb.Message.computeOneofCase(this, proto.proto.InteractiveAnnotation.oneofGroups_[0]));
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
proto.proto.InteractiveAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.InteractiveAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.InteractiveAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.InteractiveAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    polygonverticesList: jspb.Message.toObjectList(msg.getPolygonverticesList(),
    proto.proto.Point.toObject, includeInstance),
    location: (f = msg.getLocation()) && proto.proto.Location.toObject(includeInstance, f)
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
 * @return {!proto.proto.InteractiveAnnotation}
 */
proto.proto.InteractiveAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.InteractiveAnnotation;
  return proto.proto.InteractiveAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.InteractiveAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.InteractiveAnnotation}
 */
proto.proto.InteractiveAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Point;
      reader.readMessage(value,proto.proto.Point.deserializeBinaryFromReader);
      msg.addPolygonvertices(value);
      break;
    case 2:
      var value = new proto.proto.Location;
      reader.readMessage(value,proto.proto.Location.deserializeBinaryFromReader);
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
proto.proto.InteractiveAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.InteractiveAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.InteractiveAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.InteractiveAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolygonverticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.Point.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Point polygonVertices = 1;
 * @return {!Array<!proto.proto.Point>}
 */
proto.proto.InteractiveAnnotation.prototype.getPolygonverticesList = function() {
  return /** @type{!Array<!proto.proto.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Point, 1));
};


/**
 * @param {!Array<!proto.proto.Point>} value
 * @return {!proto.proto.InteractiveAnnotation} returns this
*/
proto.proto.InteractiveAnnotation.prototype.setPolygonverticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Point}
 */
proto.proto.InteractiveAnnotation.prototype.addPolygonvertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.InteractiveAnnotation} returns this
 */
proto.proto.InteractiveAnnotation.prototype.clearPolygonverticesList = function() {
  return this.setPolygonverticesList([]);
};


/**
 * optional Location location = 2;
 * @return {?proto.proto.Location}
 */
proto.proto.InteractiveAnnotation.prototype.getLocation = function() {
  return /** @type{?proto.proto.Location} */ (
    jspb.Message.getWrapperField(this, proto.proto.Location, 2));
};


/**
 * @param {?proto.proto.Location|undefined} value
 * @return {!proto.proto.InteractiveAnnotation} returns this
*/
proto.proto.InteractiveAnnotation.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.InteractiveAnnotation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.InteractiveAnnotation} returns this
 */
proto.proto.InteractiveAnnotation.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.InteractiveAnnotation.prototype.hasLocation = function() {
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
proto.proto.AdReplyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AdReplyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AdReplyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AdReplyInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.AdReplyInfo}
 */
proto.proto.AdReplyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AdReplyInfo;
  return proto.proto.AdReplyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AdReplyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AdReplyInfo}
 */
proto.proto.AdReplyInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (reader.readEnum());
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
proto.proto.AdReplyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AdReplyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AdReplyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AdReplyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (jspb.Message.getField(message, 2));
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
proto.proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE = {
  NONE: 0,
  IMAGE: 1,
  VIDEO: 2
};

/**
 * optional string advertiserName = 1;
 * @return {string}
 */
proto.proto.AdReplyInfo.prototype.getAdvertisername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.setAdvertisername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.clearAdvertisername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AdReplyInfo.prototype.hasAdvertisername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AD_REPLY_INFO_MEDIATYPE mediaType = 2;
 * @return {!proto.proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE}
 */
proto.proto.AdReplyInfo.prototype.getMediatype = function() {
  return /** @type {!proto.proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} value
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.setMediatype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.clearMediatype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AdReplyInfo.prototype.hasMediatype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.AdReplyInfo.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.AdReplyInfo.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.AdReplyInfo.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AdReplyInfo.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string caption = 17;
 * @return {string}
 */
proto.proto.AdReplyInfo.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AdReplyInfo} returns this
 */
proto.proto.AdReplyInfo.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AdReplyInfo.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ContextInfo.repeatedFields_ = [15];



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
proto.proto.ContextInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContextInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContextInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContextInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    stanzaid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    quotedmessage: (f = msg.getQuotedmessage()) && proto.proto.Message.toObject(includeInstance, f),
    remotejid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    mentionedjidList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    conversionsource: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    conversiondata: msg.getConversiondata_asB64(),
    conversiondelayseconds: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    forwardingscore: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    isforwarded: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    quotedad: (f = msg.getQuotedad()) && proto.proto.AdReplyInfo.toObject(includeInstance, f),
    placeholderkey: (f = msg.getPlaceholderkey()) && proto.proto.MessageKey.toObject(includeInstance, f),
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
 * @return {!proto.proto.ContextInfo}
 */
proto.proto.ContextInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContextInfo;
  return proto.proto.ContextInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContextInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContextInfo}
 */
proto.proto.ContextInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.Message;
      reader.readMessage(value,proto.proto.Message.deserializeBinaryFromReader);
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
      var value = new proto.proto.AdReplyInfo;
      reader.readMessage(value,proto.proto.AdReplyInfo.deserializeBinaryFromReader);
      msg.setQuotedad(value);
      break;
    case 24:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
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
proto.proto.ContextInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContextInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContextInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContextInfo.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.Message.serializeBinaryToWriter
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
      proto.proto.AdReplyInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlaceholderkey();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.proto.MessageKey.serializeBinaryToWriter
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
proto.proto.ContextInfo.prototype.getStanzaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setStanzaid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearStanzaid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasStanzaid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string participant = 2;
 * @return {string}
 */
proto.proto.ContextInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Message quotedMessage = 3;
 * @return {?proto.proto.Message}
 */
proto.proto.ContextInfo.prototype.getQuotedmessage = function() {
  return /** @type{?proto.proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.proto.Message, 3));
};


/**
 * @param {?proto.proto.Message|undefined} value
 * @return {!proto.proto.ContextInfo} returns this
*/
proto.proto.ContextInfo.prototype.setQuotedmessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearQuotedmessage = function() {
  return this.setQuotedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasQuotedmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string remoteJid = 4;
 * @return {string}
 */
proto.proto.ContextInfo.prototype.getRemotejid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setRemotejid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearRemotejid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasRemotejid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string mentionedJid = 15;
 * @return {!Array<string>}
 */
proto.proto.ContextInfo.prototype.getMentionedjidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setMentionedjidList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.addMentionedjid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearMentionedjidList = function() {
  return this.setMentionedjidList([]);
};


/**
 * optional string conversionSource = 18;
 * @return {string}
 */
proto.proto.ContextInfo.prototype.getConversionsource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setConversionsource = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearConversionsource = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasConversionsource = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bytes conversionData = 19;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ContextInfo.prototype.getConversiondata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * optional bytes conversionData = 19;
 * This is a type-conversion wrapper around `getConversiondata()`
 * @return {string}
 */
proto.proto.ContextInfo.prototype.getConversiondata_asB64 = function() {
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
proto.proto.ContextInfo.prototype.getConversiondata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConversiondata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setConversiondata = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearConversiondata = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasConversiondata = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 conversionDelaySeconds = 20;
 * @return {number}
 */
proto.proto.ContextInfo.prototype.getConversiondelayseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setConversiondelayseconds = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearConversiondelayseconds = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasConversiondelayseconds = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint32 forwardingScore = 21;
 * @return {number}
 */
proto.proto.ContextInfo.prototype.getForwardingscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setForwardingscore = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearForwardingscore = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasForwardingscore = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool isForwarded = 22;
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.getIsforwarded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setIsforwarded = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearIsforwarded = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasIsforwarded = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional AdReplyInfo quotedAd = 23;
 * @return {?proto.proto.AdReplyInfo}
 */
proto.proto.ContextInfo.prototype.getQuotedad = function() {
  return /** @type{?proto.proto.AdReplyInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.AdReplyInfo, 23));
};


/**
 * @param {?proto.proto.AdReplyInfo|undefined} value
 * @return {!proto.proto.ContextInfo} returns this
*/
proto.proto.ContextInfo.prototype.setQuotedad = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearQuotedad = function() {
  return this.setQuotedad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasQuotedad = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional MessageKey placeholderKey = 24;
 * @return {?proto.proto.MessageKey}
 */
proto.proto.ContextInfo.prototype.getPlaceholderkey = function() {
  return /** @type{?proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 24));
};


/**
 * @param {?proto.proto.MessageKey|undefined} value
 * @return {!proto.proto.ContextInfo} returns this
*/
proto.proto.ContextInfo.prototype.setPlaceholderkey = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearPlaceholderkey = function() {
  return this.setPlaceholderkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasPlaceholderkey = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional uint32 expiration = 25;
 * @return {number}
 */
proto.proto.ContextInfo.prototype.getExpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setExpiration = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearExpiration = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional int64 ephemeralSettingTimestamp = 26;
 * @return {number}
 */
proto.proto.ContextInfo.prototype.getEphemeralsettingtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setEphemeralsettingtimestamp = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearEphemeralsettingtimestamp = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasEphemeralsettingtimestamp = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ContextInfo.prototype.getEphemeralsharedsecret = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * This is a type-conversion wrapper around `getEphemeralsharedsecret()`
 * @return {string}
 */
proto.proto.ContextInfo.prototype.getEphemeralsharedsecret_asB64 = function() {
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
proto.proto.ContextInfo.prototype.getEphemeralsharedsecret_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEphemeralsharedsecret()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.setEphemeralsharedsecret = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContextInfo} returns this
 */
proto.proto.ContextInfo.prototype.clearEphemeralsharedsecret = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContextInfo.prototype.hasEphemeralsharedsecret = function() {
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
proto.proto.SenderKeyDistributionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SenderKeyDistributionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SenderKeyDistributionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SenderKeyDistributionMessage.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.SenderKeyDistributionMessage}
 */
proto.proto.SenderKeyDistributionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SenderKeyDistributionMessage;
  return proto.proto.SenderKeyDistributionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SenderKeyDistributionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SenderKeyDistributionMessage}
 */
proto.proto.SenderKeyDistributionMessage.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.SenderKeyDistributionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SenderKeyDistributionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SenderKeyDistributionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SenderKeyDistributionMessage.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.SenderKeyDistributionMessage.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SenderKeyDistributionMessage} returns this
 */
proto.proto.SenderKeyDistributionMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.SenderKeyDistributionMessage} returns this
 */
proto.proto.SenderKeyDistributionMessage.prototype.clearGroupid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SenderKeyDistributionMessage.prototype.hasGroupid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * This is a type-conversion wrapper around `getAxolotlsenderkeydistributionmessage()`
 * @return {string}
 */
proto.proto.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage_asB64 = function() {
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
proto.proto.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAxolotlsenderkeydistributionmessage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.SenderKeyDistributionMessage} returns this
 */
proto.proto.SenderKeyDistributionMessage.prototype.setAxolotlsenderkeydistributionmessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.SenderKeyDistributionMessage} returns this
 */
proto.proto.SenderKeyDistributionMessage.prototype.clearAxolotlsenderkeydistributionmessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SenderKeyDistributionMessage.prototype.hasAxolotlsenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ImageMessage.repeatedFields_ = [10,22];



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
proto.proto.ImageMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ImageMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ImageMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageMessage.toObject = function(includeInstance, msg) {
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
    proto.proto.InteractiveAnnotation.toObject, includeInstance),
    directpath: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f),
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
 * @return {!proto.proto.ImageMessage}
 */
proto.proto.ImageMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ImageMessage;
  return proto.proto.ImageMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ImageMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ImageMessage}
 */
proto.proto.ImageMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.InteractiveAnnotation;
      reader.readMessage(value,proto.proto.InteractiveAnnotation.deserializeBinaryFromReader);
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.ImageMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ImageMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ImageMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.InteractiveAnnotation.serializeBinaryToWriter
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
      proto.proto.ContextInfo.serializeBinaryToWriter
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
proto.proto.ImageMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string caption = 3;
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileSha256 = 4;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getFilesha256_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 fileLength = 5;
 * @return {number}
 */
proto.proto.ImageMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.proto.ImageMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 width = 7;
 * @return {number}
 */
proto.proto.ImageMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes mediaKey = 8;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes mediaKey = 8;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getMediakey_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes fileEncSha256 = 9;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes fileEncSha256 = 9;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getFileencsha256_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated InteractiveAnnotation interactiveAnnotations = 10;
 * @return {!Array<!proto.proto.InteractiveAnnotation>}
 */
proto.proto.ImageMessage.prototype.getInteractiveannotationsList = function() {
  return /** @type{!Array<!proto.proto.InteractiveAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.InteractiveAnnotation, 10));
};


/**
 * @param {!Array<!proto.proto.InteractiveAnnotation>} value
 * @return {!proto.proto.ImageMessage} returns this
*/
proto.proto.ImageMessage.prototype.setInteractiveannotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.proto.InteractiveAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.InteractiveAnnotation}
 */
proto.proto.ImageMessage.prototype.addInteractiveannotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.proto.InteractiveAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearInteractiveannotationsList = function() {
  return this.setInteractiveannotationsList([]);
};


/**
 * optional string directPath = 11;
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 12;
 * @return {number}
 */
proto.proto.ImageMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.ImageMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.ImageMessage} returns this
*/
proto.proto.ImageMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes firstScanSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getFirstscansidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes firstScanSidecar = 18;
 * This is a type-conversion wrapper around `getFirstscansidecar()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getFirstscansidecar_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getFirstscansidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFirstscansidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setFirstscansidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearFirstscansidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasFirstscansidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint32 firstScanLength = 19;
 * @return {number}
 */
proto.proto.ImageMessage.prototype.getFirstscanlength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setFirstscanlength = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearFirstscanlength = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasFirstscanlength = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 experimentGroupId = 20;
 * @return {number}
 */
proto.proto.ImageMessage.prototype.getExperimentgroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setExperimentgroupid = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearExperimentgroupid = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasExperimentgroupid = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bytes scansSidecar = 21;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getScanssidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * optional bytes scansSidecar = 21;
 * This is a type-conversion wrapper around `getScanssidecar()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getScanssidecar_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getScanssidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScanssidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setScanssidecar = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearScanssidecar = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasScanssidecar = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated uint32 scanLengths = 22;
 * @return {!Array<number>}
 */
proto.proto.ImageMessage.prototype.getScanlengthsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setScanlengthsList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.addScanlengths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearScanlengthsList = function() {
  return this.setScanlengthsList([]);
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getMidqualityfilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * This is a type-conversion wrapper around `getMidqualityfilesha256()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getMidqualityfilesha256_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getMidqualityfilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMidqualityfilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setMidqualityfilesha256 = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearMidqualityfilesha256 = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasMidqualityfilesha256 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ImageMessage.prototype.getMidqualityfileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * This is a type-conversion wrapper around `getMidqualityfileencsha256()`
 * @return {string}
 */
proto.proto.ImageMessage.prototype.getMidqualityfileencsha256_asB64 = function() {
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
proto.proto.ImageMessage.prototype.getMidqualityfileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMidqualityfileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.setMidqualityfileencsha256 = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ImageMessage} returns this
 */
proto.proto.ImageMessage.prototype.clearMidqualityfileencsha256 = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageMessage.prototype.hasMidqualityfileencsha256 = function() {
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
proto.proto.ContactMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContactMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContactMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContactMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    vcard: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.ContactMessage}
 */
proto.proto.ContactMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContactMessage;
  return proto.proto.ContactMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContactMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContactMessage}
 */
proto.proto.ContactMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.ContactMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContactMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContactMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContactMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.proto.ContactMessage.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContactMessage} returns this
 */
proto.proto.ContactMessage.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContactMessage} returns this
 */
proto.proto.ContactMessage.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContactMessage.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string vcard = 16;
 * @return {string}
 */
proto.proto.ContactMessage.prototype.getVcard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContactMessage} returns this
 */
proto.proto.ContactMessage.prototype.setVcard = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContactMessage} returns this
 */
proto.proto.ContactMessage.prototype.clearVcard = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContactMessage.prototype.hasVcard = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.ContactMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.ContactMessage} returns this
*/
proto.proto.ContactMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContactMessage} returns this
 */
proto.proto.ContactMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContactMessage.prototype.hasContextinfo = function() {
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
proto.proto.LocationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.LocationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.LocationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LocationMessage.toObject = function(includeInstance, msg) {
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
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.LocationMessage}
 */
proto.proto.LocationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.LocationMessage;
  return proto.proto.LocationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.LocationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.LocationMessage}
 */
proto.proto.LocationMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.LocationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.LocationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.LocationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LocationMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.proto.LocationMessage.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.proto.LocationMessage.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.proto.LocationMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.proto.LocationMessage.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.proto.LocationMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool isLive = 6;
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.getIslive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setIslive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearIslive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasIslive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 accuracyInMeters = 7;
 * @return {number}
 */
proto.proto.LocationMessage.prototype.getAccuracyinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setAccuracyinmeters = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearAccuracyinmeters = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasAccuracyinmeters = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional float speedInMps = 8;
 * @return {number}
 */
proto.proto.LocationMessage.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setSpeedinmps = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearSpeedinmps = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasSpeedinmps = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 degreesClockwiseFromMagneticNorth = 9;
 * @return {number}
 */
proto.proto.LocationMessage.prototype.getDegreesclockwisefrommagneticnorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setDegreesclockwisefrommagneticnorth = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string comment = 11;
 * @return {string}
 */
proto.proto.LocationMessage.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearComment = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasComment = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.LocationMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.LocationMessage.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.LocationMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.LocationMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.LocationMessage} returns this
*/
proto.proto.LocationMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.LocationMessage} returns this
 */
proto.proto.LocationMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LocationMessage.prototype.hasContextinfo = function() {
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
proto.proto.ExtendedTextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ExtendedTextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ExtendedTextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExtendedTextMessage.toObject = function(includeInstance, msg) {
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
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f),
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
 * @return {!proto.proto.ExtendedTextMessage}
 */
proto.proto.ExtendedTextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ExtendedTextMessage;
  return proto.proto.ExtendedTextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ExtendedTextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ExtendedTextMessage}
 */
proto.proto.ExtendedTextMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (reader.readEnum());
      msg.setFont(value);
      break;
    case 10:
      var value = /** @type {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (reader.readEnum());
      msg.setPreviewtype(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.ExtendedTextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ExtendedTextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ExtendedTextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExtendedTextMessage.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (jspb.Message.getField(message, 10));
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
      proto.proto.ContextInfo.serializeBinaryToWriter
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
proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE = {
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
proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE = {
  NONE: 0,
  VIDEO: 1
};

/**
 * optional string text = 1;
 * @return {string}
 */
proto.proto.ExtendedTextMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setText = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearText = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string matchedText = 2;
 * @return {string}
 */
proto.proto.ExtendedTextMessage.prototype.getMatchedtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setMatchedtext = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearMatchedtext = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasMatchedtext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string canonicalUrl = 4;
 * @return {string}
 */
proto.proto.ExtendedTextMessage.prototype.getCanonicalurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setCanonicalurl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearCanonicalurl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasCanonicalurl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.proto.ExtendedTextMessage.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.proto.ExtendedTextMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional fixed32 textArgb = 7;
 * @return {number}
 */
proto.proto.ExtendedTextMessage.prototype.getTextargb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setTextargb = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearTextargb = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasTextargb = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional fixed32 backgroundArgb = 8;
 * @return {number}
 */
proto.proto.ExtendedTextMessage.prototype.getBackgroundargb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setBackgroundargb = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearBackgroundargb = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasBackgroundargb = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional EXTENDED_TEXT_MESSAGE_FONTTYPE font = 9;
 * @return {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE}
 */
proto.proto.ExtendedTextMessage.prototype.getFont = function() {
  return /** @type {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setFont = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearFont = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasFont = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional EXTENDED_TEXT_MESSAGE_PREVIEWTYPE previewType = 10;
 * @return {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE}
 */
proto.proto.ExtendedTextMessage.prototype.getPreviewtype = function() {
  return /** @type {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setPreviewtype = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearPreviewtype = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasPreviewtype = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ExtendedTextMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.ExtendedTextMessage.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.ExtendedTextMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.ExtendedTextMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
*/
proto.proto.ExtendedTextMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool doNotPlayInline = 18;
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.getDonotplayinline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.setDonotplayinline = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ExtendedTextMessage} returns this
 */
proto.proto.ExtendedTextMessage.prototype.clearDonotplayinline = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ExtendedTextMessage.prototype.hasDonotplayinline = function() {
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
proto.proto.DocumentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DocumentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DocumentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DocumentMessage.toObject = function(includeInstance, msg) {
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
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.DocumentMessage}
 */
proto.proto.DocumentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DocumentMessage;
  return proto.proto.DocumentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DocumentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DocumentMessage}
 */
proto.proto.DocumentMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.DocumentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DocumentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DocumentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DocumentMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.proto.DocumentMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileSha256 = 4;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getFilesha256_asB64 = function() {
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
proto.proto.DocumentMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 fileLength = 5;
 * @return {number}
 */
proto.proto.DocumentMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 pageCount = 6;
 * @return {number}
 */
proto.proto.DocumentMessage.prototype.getPagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setPagecount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearPagecount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasPagecount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes mediaKey = 7;
 * @return {!(string|Uint8Array)}
 */
proto.proto.DocumentMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes mediaKey = 7;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getMediakey_asB64 = function() {
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
proto.proto.DocumentMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string fileName = 8;
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setFilename = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearFilename = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasFilename = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes fileEncSha256 = 9;
 * @return {!(string|Uint8Array)}
 */
proto.proto.DocumentMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes fileEncSha256 = 9;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getFileencsha256_asB64 = function() {
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
proto.proto.DocumentMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string directPath = 10;
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 11;
 * @return {number}
 */
proto.proto.DocumentMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.DocumentMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.DocumentMessage.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.DocumentMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.DocumentMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.DocumentMessage} returns this
*/
proto.proto.DocumentMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.DocumentMessage} returns this
 */
proto.proto.DocumentMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DocumentMessage.prototype.hasContextinfo = function() {
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
proto.proto.AudioMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AudioMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AudioMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AudioMessage.toObject = function(includeInstance, msg) {
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
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f),
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
 * @return {!proto.proto.AudioMessage}
 */
proto.proto.AudioMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AudioMessage;
  return proto.proto.AudioMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AudioMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AudioMessage}
 */
proto.proto.AudioMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.AudioMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AudioMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AudioMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AudioMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
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
proto.proto.AudioMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.proto.AudioMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.AudioMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileSha256 = 3;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.proto.AudioMessage.prototype.getFilesha256_asB64 = function() {
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
proto.proto.AudioMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 fileLength = 4;
 * @return {number}
 */
proto.proto.AudioMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 seconds = 5;
 * @return {number}
 */
proto.proto.AudioMessage.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool ptt = 6;
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.getPtt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setPtt = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearPtt = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasPtt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes mediaKey = 7;
 * @return {!(string|Uint8Array)}
 */
proto.proto.AudioMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes mediaKey = 7;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.proto.AudioMessage.prototype.getMediakey_asB64 = function() {
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
proto.proto.AudioMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes fileEncSha256 = 8;
 * @return {!(string|Uint8Array)}
 */
proto.proto.AudioMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes fileEncSha256 = 8;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.proto.AudioMessage.prototype.getFileencsha256_asB64 = function() {
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
proto.proto.AudioMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string directPath = 9;
 * @return {string}
 */
proto.proto.AudioMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 10;
 * @return {number}
 */
proto.proto.AudioMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.AudioMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.AudioMessage} returns this
*/
proto.proto.AudioMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes streamingSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.proto.AudioMessage.prototype.getStreamingsidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes streamingSidecar = 18;
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {string}
 */
proto.proto.AudioMessage.prototype.getStreamingsidecar_asB64 = function() {
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
proto.proto.AudioMessage.prototype.getStreamingsidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStreamingsidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.setStreamingsidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.AudioMessage} returns this
 */
proto.proto.AudioMessage.prototype.clearStreamingsidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AudioMessage.prototype.hasStreamingsidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.VideoMessage.repeatedFields_ = [12];



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
proto.proto.VideoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.VideoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.VideoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VideoMessage.toObject = function(includeInstance, msg) {
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
    proto.proto.InteractiveAnnotation.toObject, includeInstance),
    directpath: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f),
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
 * @return {!proto.proto.VideoMessage}
 */
proto.proto.VideoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.VideoMessage;
  return proto.proto.VideoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.VideoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.VideoMessage}
 */
proto.proto.VideoMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.InteractiveAnnotation;
      reader.readMessage(value,proto.proto.InteractiveAnnotation.deserializeBinaryFromReader);
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStreamingsidecar(value);
      break;
    case 19:
      var value = /** @type {!proto.proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (reader.readEnum());
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
proto.proto.VideoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.VideoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.VideoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VideoMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.InteractiveAnnotation.serializeBinaryToWriter
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
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
  f = /** @type {!proto.proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (jspb.Message.getField(message, 19));
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
proto.proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION = {
  NONE: 0,
  GIPHY: 1,
  TENOR: 2
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.VideoMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileSha256 = 3;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getFilesha256_asB64 = function() {
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
proto.proto.VideoMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 fileLength = 4;
 * @return {number}
 */
proto.proto.VideoMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 seconds = 5;
 * @return {number}
 */
proto.proto.VideoMessage.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes mediaKey = 6;
 * @return {!(string|Uint8Array)}
 */
proto.proto.VideoMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes mediaKey = 6;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getMediakey_asB64 = function() {
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
proto.proto.VideoMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string caption = 7;
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool gifPlayback = 8;
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.getGifplayback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setGifplayback = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearGifplayback = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasGifplayback = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 height = 9;
 * @return {number}
 */
proto.proto.VideoMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 width = 10;
 * @return {number}
 */
proto.proto.VideoMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bytes fileEncSha256 = 11;
 * @return {!(string|Uint8Array)}
 */
proto.proto.VideoMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes fileEncSha256 = 11;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getFileencsha256_asB64 = function() {
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
proto.proto.VideoMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated InteractiveAnnotation interactiveAnnotations = 12;
 * @return {!Array<!proto.proto.InteractiveAnnotation>}
 */
proto.proto.VideoMessage.prototype.getInteractiveannotationsList = function() {
  return /** @type{!Array<!proto.proto.InteractiveAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.InteractiveAnnotation, 12));
};


/**
 * @param {!Array<!proto.proto.InteractiveAnnotation>} value
 * @return {!proto.proto.VideoMessage} returns this
*/
proto.proto.VideoMessage.prototype.setInteractiveannotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.proto.InteractiveAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.InteractiveAnnotation}
 */
proto.proto.VideoMessage.prototype.addInteractiveannotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.proto.InteractiveAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearInteractiveannotationsList = function() {
  return this.setInteractiveannotationsList([]);
};


/**
 * optional string directPath = 13;
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 14;
 * @return {number}
 */
proto.proto.VideoMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.VideoMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.VideoMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.VideoMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.VideoMessage} returns this
*/
proto.proto.VideoMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes streamingSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.proto.VideoMessage.prototype.getStreamingsidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes streamingSidecar = 18;
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {string}
 */
proto.proto.VideoMessage.prototype.getStreamingsidecar_asB64 = function() {
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
proto.proto.VideoMessage.prototype.getStreamingsidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStreamingsidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setStreamingsidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearStreamingsidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasStreamingsidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional VIDEO_MESSAGE_ATTRIBUTION gifAttribution = 19;
 * @return {!proto.proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION}
 */
proto.proto.VideoMessage.prototype.getGifattribution = function() {
  return /** @type {!proto.proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} value
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.setGifattribution = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VideoMessage} returns this
 */
proto.proto.VideoMessage.prototype.clearGifattribution = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VideoMessage.prototype.hasGifattribution = function() {
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
proto.proto.Call.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Call.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Call} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Call.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.Call}
 */
proto.proto.Call.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Call;
  return proto.proto.Call.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Call} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Call}
 */
proto.proto.Call.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.Call.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Call.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Call} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Call.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.Call.prototype.getCallkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes callKey = 1;
 * This is a type-conversion wrapper around `getCallkey()`
 * @return {string}
 */
proto.proto.Call.prototype.getCallkey_asB64 = function() {
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
proto.proto.Call.prototype.getCallkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCallkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.Call} returns this
 */
proto.proto.Call.prototype.setCallkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Call} returns this
 */
proto.proto.Call.prototype.clearCallkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Call.prototype.hasCallkey = function() {
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
proto.proto.Chat.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Chat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Chat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Chat.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.Chat}
 */
proto.proto.Chat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Chat;
  return proto.proto.Chat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Chat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Chat}
 */
proto.proto.Chat.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.Chat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Chat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Chat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Chat.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.Chat.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Chat} returns this
 */
proto.proto.Chat.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Chat} returns this
 */
proto.proto.Chat.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Chat.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.proto.Chat.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Chat} returns this
 */
proto.proto.Chat.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Chat} returns this
 */
proto.proto.Chat.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Chat.prototype.hasId = function() {
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
proto.proto.ProtocolMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ProtocolMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ProtocolMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProtocolMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.proto.MessageKey.toObject(includeInstance, f),
    type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ephemeralexpiration: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    ephemeralsettingtimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    historysyncnotification: (f = msg.getHistorysyncnotification()) && proto.proto.HistorySyncNotification.toObject(includeInstance, f)
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
 * @return {!proto.proto.ProtocolMessage}
 */
proto.proto.ProtocolMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProtocolMessage;
  return proto.proto.ProtocolMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProtocolMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProtocolMessage}
 */
proto.proto.ProtocolMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (reader.readEnum());
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
      var value = new proto.proto.HistorySyncNotification;
      reader.readMessage(value,proto.proto.HistorySyncNotification.deserializeBinaryFromReader);
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
proto.proto.ProtocolMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProtocolMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProtocolMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProtocolMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (jspb.Message.getField(message, 2));
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
      proto.proto.HistorySyncNotification.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE = {
  REVOKE: 0,
  EPHEMERAL_SETTING: 3,
  EPHEMERAL_SYNC_RESPONSE: 4,
  HISTORY_SYNC_NOTIFICATION: 5
};

/**
 * optional MessageKey key = 1;
 * @return {?proto.proto.MessageKey}
 */
proto.proto.ProtocolMessage.prototype.getKey = function() {
  return /** @type{?proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 1));
};


/**
 * @param {?proto.proto.MessageKey|undefined} value
 * @return {!proto.proto.ProtocolMessage} returns this
*/
proto.proto.ProtocolMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProtocolMessage.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PROTOCOL_MESSAGE_TYPE type = 2;
 * @return {!proto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE}
 */
proto.proto.ProtocolMessage.prototype.getType = function() {
  return /** @type {!proto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} value
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProtocolMessage.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 ephemeralExpiration = 4;
 * @return {number}
 */
proto.proto.ProtocolMessage.prototype.getEphemeralexpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.setEphemeralexpiration = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.clearEphemeralexpiration = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProtocolMessage.prototype.hasEphemeralexpiration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 ephemeralSettingTimestamp = 5;
 * @return {number}
 */
proto.proto.ProtocolMessage.prototype.getEphemeralsettingtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.setEphemeralsettingtimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.clearEphemeralsettingtimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProtocolMessage.prototype.hasEphemeralsettingtimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HistorySyncNotification historySyncNotification = 6;
 * @return {?proto.proto.HistorySyncNotification}
 */
proto.proto.ProtocolMessage.prototype.getHistorysyncnotification = function() {
  return /** @type{?proto.proto.HistorySyncNotification} */ (
    jspb.Message.getWrapperField(this, proto.proto.HistorySyncNotification, 6));
};


/**
 * @param {?proto.proto.HistorySyncNotification|undefined} value
 * @return {!proto.proto.ProtocolMessage} returns this
*/
proto.proto.ProtocolMessage.prototype.setHistorysyncnotification = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProtocolMessage} returns this
 */
proto.proto.ProtocolMessage.prototype.clearHistorysyncnotification = function() {
  return this.setHistorysyncnotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProtocolMessage.prototype.hasHistorysyncnotification = function() {
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
proto.proto.HistorySyncNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HistorySyncNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HistorySyncNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HistorySyncNotification.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HistorySyncNotification}
 */
proto.proto.HistorySyncNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HistorySyncNotification;
  return proto.proto.HistorySyncNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HistorySyncNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HistorySyncNotification}
 */
proto.proto.HistorySyncNotification.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (reader.readEnum());
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
proto.proto.HistorySyncNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HistorySyncNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HistorySyncNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HistorySyncNotification.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (jspb.Message.getField(message, 6));
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
proto.proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE = {
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
proto.proto.HistorySyncNotification.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes fileSha256 = 1;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.proto.HistorySyncNotification.prototype.getFilesha256_asB64 = function() {
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
proto.proto.HistorySyncNotification.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 fileLength = 2;
 * @return {number}
 */
proto.proto.HistorySyncNotification.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes mediaKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.HistorySyncNotification.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes mediaKey = 3;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.proto.HistorySyncNotification.prototype.getMediakey_asB64 = function() {
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
proto.proto.HistorySyncNotification.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileEncSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.proto.HistorySyncNotification.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileEncSha256 = 4;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.proto.HistorySyncNotification.prototype.getFileencsha256_asB64 = function() {
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
proto.proto.HistorySyncNotification.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string directPath = 5;
 * @return {string}
 */
proto.proto.HistorySyncNotification.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE syncType = 6;
 * @return {!proto.proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE}
 */
proto.proto.HistorySyncNotification.prototype.getSynctype = function() {
  return /** @type {!proto.proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setSynctype = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearSynctype = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasSynctype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 chunkOrder = 7;
 * @return {number}
 */
proto.proto.HistorySyncNotification.prototype.getChunkorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setChunkorder = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearChunkorder = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasChunkorder = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string originalMessageId = 8;
 * @return {string}
 */
proto.proto.HistorySyncNotification.prototype.getOriginalmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.setOriginalmessageid = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HistorySyncNotification} returns this
 */
proto.proto.HistorySyncNotification.prototype.clearOriginalmessageid = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HistorySyncNotification.prototype.hasOriginalmessageid = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ContactsArrayMessage.repeatedFields_ = [2];



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
proto.proto.ContactsArrayMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContactsArrayMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContactsArrayMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContactsArrayMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    contactsList: jspb.Message.toObjectList(msg.getContactsList(),
    proto.proto.ContactMessage.toObject, includeInstance),
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.ContactsArrayMessage}
 */
proto.proto.ContactsArrayMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContactsArrayMessage;
  return proto.proto.ContactsArrayMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContactsArrayMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContactsArrayMessage}
 */
proto.proto.ContactsArrayMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContactMessage;
      reader.readMessage(value,proto.proto.ContactMessage.deserializeBinaryFromReader);
      msg.addContacts(value);
      break;
    case 17:
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.ContactsArrayMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContactsArrayMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContactsArrayMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContactsArrayMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContactMessage.serializeBinaryToWriter
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.proto.ContactsArrayMessage.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContactsArrayMessage} returns this
 */
proto.proto.ContactsArrayMessage.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ContactsArrayMessage} returns this
 */
proto.proto.ContactsArrayMessage.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContactsArrayMessage.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ContactMessage contacts = 2;
 * @return {!Array<!proto.proto.ContactMessage>}
 */
proto.proto.ContactsArrayMessage.prototype.getContactsList = function() {
  return /** @type{!Array<!proto.proto.ContactMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ContactMessage, 2));
};


/**
 * @param {!Array<!proto.proto.ContactMessage>} value
 * @return {!proto.proto.ContactsArrayMessage} returns this
*/
proto.proto.ContactsArrayMessage.prototype.setContactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.ContactMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ContactMessage}
 */
proto.proto.ContactsArrayMessage.prototype.addContacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.ContactMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ContactsArrayMessage} returns this
 */
proto.proto.ContactsArrayMessage.prototype.clearContactsList = function() {
  return this.setContactsList([]);
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.ContactsArrayMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.ContactsArrayMessage} returns this
*/
proto.proto.ContactsArrayMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContactsArrayMessage} returns this
 */
proto.proto.ContactsArrayMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContactsArrayMessage.prototype.hasContextinfo = function() {
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
proto.proto.HSMCurrency.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HSMCurrency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HSMCurrency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMCurrency.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HSMCurrency}
 */
proto.proto.HSMCurrency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HSMCurrency;
  return proto.proto.HSMCurrency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HSMCurrency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HSMCurrency}
 */
proto.proto.HSMCurrency.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.HSMCurrency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HSMCurrency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HSMCurrency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMCurrency.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.HSMCurrency.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HSMCurrency} returns this
 */
proto.proto.HSMCurrency.prototype.setCurrencycode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMCurrency} returns this
 */
proto.proto.HSMCurrency.prototype.clearCurrencycode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMCurrency.prototype.hasCurrencycode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 amount1000 = 2;
 * @return {number}
 */
proto.proto.HSMCurrency.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HSMCurrency} returns this
 */
proto.proto.HSMCurrency.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMCurrency} returns this
 */
proto.proto.HSMCurrency.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMCurrency.prototype.hasAmount1000 = function() {
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
proto.proto.HSMDateTimeComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HSMDateTimeComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HSMDateTimeComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMDateTimeComponent.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HSMDateTimeComponent}
 */
proto.proto.HSMDateTimeComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HSMDateTimeComponent;
  return proto.proto.HSMDateTimeComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HSMDateTimeComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HSMDateTimeComponent}
 */
proto.proto.HSMDateTimeComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (reader.readEnum());
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
      var value = /** @type {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (reader.readEnum());
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
proto.proto.HSMDateTimeComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HSMDateTimeComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HSMDateTimeComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMDateTimeComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (jspb.Message.getField(message, 1));
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
  f = /** @type {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (jspb.Message.getField(message, 7));
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
proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE = {
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
proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE = {
  GREGORIAN: 1,
  SOLAR_HIJRI: 2
};

/**
 * optional HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE dayOfWeek = 1;
 * @return {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE}
 */
proto.proto.HSMDateTimeComponent.prototype.getDayofweek = function() {
  return /** @type {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} value
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.setDayofweek = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.clearDayofweek = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeComponent.prototype.hasDayofweek = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 year = 2;
 * @return {number}
 */
proto.proto.HSMDateTimeComponent.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.setYear = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.clearYear = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeComponent.prototype.hasYear = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 month = 3;
 * @return {number}
 */
proto.proto.HSMDateTimeComponent.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.setMonth = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.clearMonth = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeComponent.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 dayOfMonth = 4;
 * @return {number}
 */
proto.proto.HSMDateTimeComponent.prototype.getDayofmonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.setDayofmonth = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.clearDayofmonth = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeComponent.prototype.hasDayofmonth = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 hour = 5;
 * @return {number}
 */
proto.proto.HSMDateTimeComponent.prototype.getHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.setHour = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.clearHour = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeComponent.prototype.hasHour = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 minute = 6;
 * @return {number}
 */
proto.proto.HSMDateTimeComponent.prototype.getMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.setMinute = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.clearMinute = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeComponent.prototype.hasMinute = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional HSM_DATE_TIME_COMPONENT_CALENDARTYPE calendar = 7;
 * @return {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE}
 */
proto.proto.HSMDateTimeComponent.prototype.getCalendar = function() {
  return /** @type {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (jspb.Message.getFieldWithDefault(this, 7, 1));
};


/**
 * @param {!proto.proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} value
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.setCalendar = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeComponent} returns this
 */
proto.proto.HSMDateTimeComponent.prototype.clearCalendar = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeComponent.prototype.hasCalendar = function() {
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
proto.proto.HSMDateTimeUnixEpoch.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HSMDateTimeUnixEpoch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HSMDateTimeUnixEpoch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMDateTimeUnixEpoch.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HSMDateTimeUnixEpoch}
 */
proto.proto.HSMDateTimeUnixEpoch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HSMDateTimeUnixEpoch;
  return proto.proto.HSMDateTimeUnixEpoch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HSMDateTimeUnixEpoch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HSMDateTimeUnixEpoch}
 */
proto.proto.HSMDateTimeUnixEpoch.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.HSMDateTimeUnixEpoch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HSMDateTimeUnixEpoch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HSMDateTimeUnixEpoch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMDateTimeUnixEpoch.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.HSMDateTimeUnixEpoch.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.HSMDateTimeUnixEpoch} returns this
 */
proto.proto.HSMDateTimeUnixEpoch.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMDateTimeUnixEpoch} returns this
 */
proto.proto.HSMDateTimeUnixEpoch.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTimeUnixEpoch.prototype.hasTimestamp = function() {
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
proto.proto.HSMDateTime.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.HSMDateTime.DatetimeoneofCase = {
  DATETIMEONEOF_NOT_SET: 0,
  COMPONENT: 1,
  UNIXEPOCH: 2
};

/**
 * @return {proto.proto.HSMDateTime.DatetimeoneofCase}
 */
proto.proto.HSMDateTime.prototype.getDatetimeoneofCase = function() {
  return /** @type {proto.proto.HSMDateTime.DatetimeoneofCase} */(jspb.Message.computeOneofCase(this, proto.proto.HSMDateTime.oneofGroups_[0]));
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
proto.proto.HSMDateTime.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HSMDateTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HSMDateTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMDateTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    component: (f = msg.getComponent()) && proto.proto.HSMDateTimeComponent.toObject(includeInstance, f),
    unixepoch: (f = msg.getUnixepoch()) && proto.proto.HSMDateTimeUnixEpoch.toObject(includeInstance, f)
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
 * @return {!proto.proto.HSMDateTime}
 */
proto.proto.HSMDateTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HSMDateTime;
  return proto.proto.HSMDateTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HSMDateTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HSMDateTime}
 */
proto.proto.HSMDateTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.HSMDateTimeComponent;
      reader.readMessage(value,proto.proto.HSMDateTimeComponent.deserializeBinaryFromReader);
      msg.setComponent(value);
      break;
    case 2:
      var value = new proto.proto.HSMDateTimeUnixEpoch;
      reader.readMessage(value,proto.proto.HSMDateTimeUnixEpoch.deserializeBinaryFromReader);
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
proto.proto.HSMDateTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HSMDateTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HSMDateTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMDateTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.HSMDateTimeComponent.serializeBinaryToWriter
    );
  }
  f = message.getUnixepoch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.HSMDateTimeUnixEpoch.serializeBinaryToWriter
    );
  }
};


/**
 * optional HSMDateTimeComponent component = 1;
 * @return {?proto.proto.HSMDateTimeComponent}
 */
proto.proto.HSMDateTime.prototype.getComponent = function() {
  return /** @type{?proto.proto.HSMDateTimeComponent} */ (
    jspb.Message.getWrapperField(this, proto.proto.HSMDateTimeComponent, 1));
};


/**
 * @param {?proto.proto.HSMDateTimeComponent|undefined} value
 * @return {!proto.proto.HSMDateTime} returns this
*/
proto.proto.HSMDateTime.prototype.setComponent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.HSMDateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HSMDateTime} returns this
 */
proto.proto.HSMDateTime.prototype.clearComponent = function() {
  return this.setComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTime.prototype.hasComponent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HSMDateTimeUnixEpoch unixEpoch = 2;
 * @return {?proto.proto.HSMDateTimeUnixEpoch}
 */
proto.proto.HSMDateTime.prototype.getUnixepoch = function() {
  return /** @type{?proto.proto.HSMDateTimeUnixEpoch} */ (
    jspb.Message.getWrapperField(this, proto.proto.HSMDateTimeUnixEpoch, 2));
};


/**
 * @param {?proto.proto.HSMDateTimeUnixEpoch|undefined} value
 * @return {!proto.proto.HSMDateTime} returns this
*/
proto.proto.HSMDateTime.prototype.setUnixepoch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.HSMDateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HSMDateTime} returns this
 */
proto.proto.HSMDateTime.prototype.clearUnixepoch = function() {
  return this.setUnixepoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMDateTime.prototype.hasUnixepoch = function() {
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
proto.proto.HSMLocalizableParameter.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.proto.HSMLocalizableParameter.ParamoneofCase = {
  PARAMONEOF_NOT_SET: 0,
  CURRENCY: 2,
  DATETIME: 3
};

/**
 * @return {proto.proto.HSMLocalizableParameter.ParamoneofCase}
 */
proto.proto.HSMLocalizableParameter.prototype.getParamoneofCase = function() {
  return /** @type {proto.proto.HSMLocalizableParameter.ParamoneofCase} */(jspb.Message.computeOneofCase(this, proto.proto.HSMLocalizableParameter.oneofGroups_[0]));
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
proto.proto.HSMLocalizableParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HSMLocalizableParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HSMLocalizableParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMLocalizableParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_default: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    currency: (f = msg.getCurrency()) && proto.proto.HSMCurrency.toObject(includeInstance, f),
    datetime: (f = msg.getDatetime()) && proto.proto.HSMDateTime.toObject(includeInstance, f)
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
 * @return {!proto.proto.HSMLocalizableParameter}
 */
proto.proto.HSMLocalizableParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HSMLocalizableParameter;
  return proto.proto.HSMLocalizableParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HSMLocalizableParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HSMLocalizableParameter}
 */
proto.proto.HSMLocalizableParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.HSMCurrency;
      reader.readMessage(value,proto.proto.HSMCurrency.deserializeBinaryFromReader);
      msg.setCurrency(value);
      break;
    case 3:
      var value = new proto.proto.HSMDateTime;
      reader.readMessage(value,proto.proto.HSMDateTime.deserializeBinaryFromReader);
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
proto.proto.HSMLocalizableParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HSMLocalizableParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HSMLocalizableParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HSMLocalizableParameter.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.HSMCurrency.serializeBinaryToWriter
    );
  }
  f = message.getDatetime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.HSMDateTime.serializeBinaryToWriter
    );
  }
};


/**
 * optional string default = 1;
 * @return {string}
 */
proto.proto.HSMLocalizableParameter.prototype.getDefault = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HSMLocalizableParameter} returns this
 */
proto.proto.HSMLocalizableParameter.prototype.setDefault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HSMLocalizableParameter} returns this
 */
proto.proto.HSMLocalizableParameter.prototype.clearDefault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMLocalizableParameter.prototype.hasDefault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HSMCurrency currency = 2;
 * @return {?proto.proto.HSMCurrency}
 */
proto.proto.HSMLocalizableParameter.prototype.getCurrency = function() {
  return /** @type{?proto.proto.HSMCurrency} */ (
    jspb.Message.getWrapperField(this, proto.proto.HSMCurrency, 2));
};


/**
 * @param {?proto.proto.HSMCurrency|undefined} value
 * @return {!proto.proto.HSMLocalizableParameter} returns this
*/
proto.proto.HSMLocalizableParameter.prototype.setCurrency = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.HSMLocalizableParameter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HSMLocalizableParameter} returns this
 */
proto.proto.HSMLocalizableParameter.prototype.clearCurrency = function() {
  return this.setCurrency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMLocalizableParameter.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HSMDateTime dateTime = 3;
 * @return {?proto.proto.HSMDateTime}
 */
proto.proto.HSMLocalizableParameter.prototype.getDatetime = function() {
  return /** @type{?proto.proto.HSMDateTime} */ (
    jspb.Message.getWrapperField(this, proto.proto.HSMDateTime, 3));
};


/**
 * @param {?proto.proto.HSMDateTime|undefined} value
 * @return {!proto.proto.HSMLocalizableParameter} returns this
*/
proto.proto.HSMLocalizableParameter.prototype.setDatetime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.HSMLocalizableParameter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HSMLocalizableParameter} returns this
 */
proto.proto.HSMLocalizableParameter.prototype.clearDatetime = function() {
  return this.setDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HSMLocalizableParameter.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.HighlyStructuredMessage.repeatedFields_ = [3,6];



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
proto.proto.HighlyStructuredMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HighlyStructuredMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HighlyStructuredMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HighlyStructuredMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    elementname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    paramsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    fallbacklg: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    fallbacklc: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    localizableparamsList: jspb.Message.toObjectList(msg.getLocalizableparamsList(),
    proto.proto.HSMLocalizableParameter.toObject, includeInstance),
    deterministiclg: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    deterministiclc: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    hydratedhsm: (f = msg.getHydratedhsm()) && proto.proto.TemplateMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.HighlyStructuredMessage}
 */
proto.proto.HighlyStructuredMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HighlyStructuredMessage;
  return proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HighlyStructuredMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HighlyStructuredMessage}
 */
proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.HSMLocalizableParameter;
      reader.readMessage(value,proto.proto.HSMLocalizableParameter.deserializeBinaryFromReader);
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
      var value = new proto.proto.TemplateMessage;
      reader.readMessage(value,proto.proto.TemplateMessage.deserializeBinaryFromReader);
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
proto.proto.HighlyStructuredMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HighlyStructuredMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HighlyStructuredMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HighlyStructuredMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.HSMLocalizableParameter.serializeBinaryToWriter
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
      proto.proto.TemplateMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.proto.HighlyStructuredMessage.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.setNamespace = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearNamespace = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HighlyStructuredMessage.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string elementName = 2;
 * @return {string}
 */
proto.proto.HighlyStructuredMessage.prototype.getElementname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.setElementname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearElementname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HighlyStructuredMessage.prototype.hasElementname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string params = 3;
 * @return {!Array<string>}
 */
proto.proto.HighlyStructuredMessage.prototype.getParamsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.setParamsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.addParams = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional string fallbackLg = 4;
 * @return {string}
 */
proto.proto.HighlyStructuredMessage.prototype.getFallbacklg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.setFallbacklg = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearFallbacklg = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HighlyStructuredMessage.prototype.hasFallbacklg = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string fallbackLc = 5;
 * @return {string}
 */
proto.proto.HighlyStructuredMessage.prototype.getFallbacklc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.setFallbacklc = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearFallbacklc = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HighlyStructuredMessage.prototype.hasFallbacklc = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated HSMLocalizableParameter localizableParams = 6;
 * @return {!Array<!proto.proto.HSMLocalizableParameter>}
 */
proto.proto.HighlyStructuredMessage.prototype.getLocalizableparamsList = function() {
  return /** @type{!Array<!proto.proto.HSMLocalizableParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.HSMLocalizableParameter, 6));
};


/**
 * @param {!Array<!proto.proto.HSMLocalizableParameter>} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
*/
proto.proto.HighlyStructuredMessage.prototype.setLocalizableparamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.HSMLocalizableParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.HSMLocalizableParameter}
 */
proto.proto.HighlyStructuredMessage.prototype.addLocalizableparams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.HSMLocalizableParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearLocalizableparamsList = function() {
  return this.setLocalizableparamsList([]);
};


/**
 * optional string deterministicLg = 7;
 * @return {string}
 */
proto.proto.HighlyStructuredMessage.prototype.getDeterministiclg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.setDeterministiclg = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearDeterministiclg = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HighlyStructuredMessage.prototype.hasDeterministiclg = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string deterministicLc = 8;
 * @return {string}
 */
proto.proto.HighlyStructuredMessage.prototype.getDeterministiclc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.setDeterministiclc = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearDeterministiclc = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HighlyStructuredMessage.prototype.hasDeterministiclc = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TemplateMessage hydratedHsm = 9;
 * @return {?proto.proto.TemplateMessage}
 */
proto.proto.HighlyStructuredMessage.prototype.getHydratedhsm = function() {
  return /** @type{?proto.proto.TemplateMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.TemplateMessage, 9));
};


/**
 * @param {?proto.proto.TemplateMessage|undefined} value
 * @return {!proto.proto.HighlyStructuredMessage} returns this
*/
proto.proto.HighlyStructuredMessage.prototype.setHydratedhsm = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HighlyStructuredMessage} returns this
 */
proto.proto.HighlyStructuredMessage.prototype.clearHydratedhsm = function() {
  return this.setHydratedhsm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HighlyStructuredMessage.prototype.hasHydratedhsm = function() {
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
proto.proto.SendPaymentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SendPaymentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SendPaymentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SendPaymentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    notemessage: (f = msg.getNotemessage()) && proto.proto.Message.toObject(includeInstance, f),
    requestmessagekey: (f = msg.getRequestmessagekey()) && proto.proto.MessageKey.toObject(includeInstance, f)
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
 * @return {!proto.proto.SendPaymentMessage}
 */
proto.proto.SendPaymentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SendPaymentMessage;
  return proto.proto.SendPaymentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SendPaymentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SendPaymentMessage}
 */
proto.proto.SendPaymentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.proto.Message;
      reader.readMessage(value,proto.proto.Message.deserializeBinaryFromReader);
      msg.setNotemessage(value);
      break;
    case 3:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
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
proto.proto.SendPaymentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SendPaymentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SendPaymentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SendPaymentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotemessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.Message.serializeBinaryToWriter
    );
  }
  f = message.getRequestmessagekey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message noteMessage = 2;
 * @return {?proto.proto.Message}
 */
proto.proto.SendPaymentMessage.prototype.getNotemessage = function() {
  return /** @type{?proto.proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.proto.Message, 2));
};


/**
 * @param {?proto.proto.Message|undefined} value
 * @return {!proto.proto.SendPaymentMessage} returns this
*/
proto.proto.SendPaymentMessage.prototype.setNotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SendPaymentMessage} returns this
 */
proto.proto.SendPaymentMessage.prototype.clearNotemessage = function() {
  return this.setNotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SendPaymentMessage.prototype.hasNotemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageKey requestMessageKey = 3;
 * @return {?proto.proto.MessageKey}
 */
proto.proto.SendPaymentMessage.prototype.getRequestmessagekey = function() {
  return /** @type{?proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 3));
};


/**
 * @param {?proto.proto.MessageKey|undefined} value
 * @return {!proto.proto.SendPaymentMessage} returns this
*/
proto.proto.SendPaymentMessage.prototype.setRequestmessagekey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SendPaymentMessage} returns this
 */
proto.proto.SendPaymentMessage.prototype.clearRequestmessagekey = function() {
  return this.setRequestmessagekey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SendPaymentMessage.prototype.hasRequestmessagekey = function() {
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
proto.proto.RequestPaymentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.RequestPaymentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.RequestPaymentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RequestPaymentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    notemessage: (f = msg.getNotemessage()) && proto.proto.Message.toObject(includeInstance, f),
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
 * @return {!proto.proto.RequestPaymentMessage}
 */
proto.proto.RequestPaymentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RequestPaymentMessage;
  return proto.proto.RequestPaymentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RequestPaymentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RequestPaymentMessage}
 */
proto.proto.RequestPaymentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.proto.Message;
      reader.readMessage(value,proto.proto.Message.deserializeBinaryFromReader);
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
proto.proto.RequestPaymentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.RequestPaymentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RequestPaymentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RequestPaymentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotemessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.Message.serializeBinaryToWriter
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
 * @return {?proto.proto.Message}
 */
proto.proto.RequestPaymentMessage.prototype.getNotemessage = function() {
  return /** @type{?proto.proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.proto.Message, 4));
};


/**
 * @param {?proto.proto.Message|undefined} value
 * @return {!proto.proto.RequestPaymentMessage} returns this
*/
proto.proto.RequestPaymentMessage.prototype.setNotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.clearNotemessage = function() {
  return this.setNotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.RequestPaymentMessage.prototype.hasNotemessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string currencyCodeIso4217 = 1;
 * @return {string}
 */
proto.proto.RequestPaymentMessage.prototype.getCurrencycodeiso4217 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.setCurrencycodeiso4217 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.clearCurrencycodeiso4217 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.RequestPaymentMessage.prototype.hasCurrencycodeiso4217 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount1000 = 2;
 * @return {number}
 */
proto.proto.RequestPaymentMessage.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.RequestPaymentMessage.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string requestFrom = 3;
 * @return {string}
 */
proto.proto.RequestPaymentMessage.prototype.getRequestfrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.setRequestfrom = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.clearRequestfrom = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.RequestPaymentMessage.prototype.hasRequestfrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 expiryTimestamp = 5;
 * @return {number}
 */
proto.proto.RequestPaymentMessage.prototype.getExpirytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.setExpirytimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.RequestPaymentMessage} returns this
 */
proto.proto.RequestPaymentMessage.prototype.clearExpirytimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.RequestPaymentMessage.prototype.hasExpirytimestamp = function() {
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
proto.proto.DeclinePaymentRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeclinePaymentRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeclinePaymentRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeclinePaymentRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.proto.MessageKey.toObject(includeInstance, f)
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
 * @return {!proto.proto.DeclinePaymentRequestMessage}
 */
proto.proto.DeclinePaymentRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeclinePaymentRequestMessage;
  return proto.proto.DeclinePaymentRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeclinePaymentRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeclinePaymentRequestMessage}
 */
proto.proto.DeclinePaymentRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
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
proto.proto.DeclinePaymentRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeclinePaymentRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeclinePaymentRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeclinePaymentRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.proto.MessageKey}
 */
proto.proto.DeclinePaymentRequestMessage.prototype.getKey = function() {
  return /** @type{?proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 1));
};


/**
 * @param {?proto.proto.MessageKey|undefined} value
 * @return {!proto.proto.DeclinePaymentRequestMessage} returns this
*/
proto.proto.DeclinePaymentRequestMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.DeclinePaymentRequestMessage} returns this
 */
proto.proto.DeclinePaymentRequestMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DeclinePaymentRequestMessage.prototype.hasKey = function() {
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
proto.proto.CancelPaymentRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CancelPaymentRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CancelPaymentRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CancelPaymentRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.proto.MessageKey.toObject(includeInstance, f)
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
 * @return {!proto.proto.CancelPaymentRequestMessage}
 */
proto.proto.CancelPaymentRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CancelPaymentRequestMessage;
  return proto.proto.CancelPaymentRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CancelPaymentRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CancelPaymentRequestMessage}
 */
proto.proto.CancelPaymentRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
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
proto.proto.CancelPaymentRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CancelPaymentRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CancelPaymentRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CancelPaymentRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.proto.MessageKey}
 */
proto.proto.CancelPaymentRequestMessage.prototype.getKey = function() {
  return /** @type{?proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 1));
};


/**
 * @param {?proto.proto.MessageKey|undefined} value
 * @return {!proto.proto.CancelPaymentRequestMessage} returns this
*/
proto.proto.CancelPaymentRequestMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CancelPaymentRequestMessage} returns this
 */
proto.proto.CancelPaymentRequestMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CancelPaymentRequestMessage.prototype.hasKey = function() {
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
proto.proto.LiveLocationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.LiveLocationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.LiveLocationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LiveLocationMessage.toObject = function(includeInstance, msg) {
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
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.LiveLocationMessage}
 */
proto.proto.LiveLocationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.LiveLocationMessage;
  return proto.proto.LiveLocationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.LiveLocationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.LiveLocationMessage}
 */
proto.proto.LiveLocationMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.LiveLocationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.LiveLocationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.LiveLocationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LiveLocationMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.proto.LiveLocationMessage.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.proto.LiveLocationMessage.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 accuracyInMeters = 3;
 * @return {number}
 */
proto.proto.LiveLocationMessage.prototype.getAccuracyinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setAccuracyinmeters = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearAccuracyinmeters = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasAccuracyinmeters = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float speedInMps = 4;
 * @return {number}
 */
proto.proto.LiveLocationMessage.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setSpeedinmps = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearSpeedinmps = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasSpeedinmps = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 degreesClockwiseFromMagneticNorth = 5;
 * @return {number}
 */
proto.proto.LiveLocationMessage.prototype.getDegreesclockwisefrommagneticnorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setDegreesclockwisefrommagneticnorth = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string caption = 6;
 * @return {string}
 */
proto.proto.LiveLocationMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 sequenceNumber = 7;
 * @return {number}
 */
proto.proto.LiveLocationMessage.prototype.getSequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setSequencenumber = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearSequencenumber = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasSequencenumber = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 timeOffset = 8;
 * @return {number}
 */
proto.proto.LiveLocationMessage.prototype.getTimeoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setTimeoffset = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearTimeoffset = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasTimeoffset = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.LiveLocationMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.LiveLocationMessage.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.LiveLocationMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.LiveLocationMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.LiveLocationMessage} returns this
*/
proto.proto.LiveLocationMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.LiveLocationMessage} returns this
 */
proto.proto.LiveLocationMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LiveLocationMessage.prototype.hasContextinfo = function() {
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
proto.proto.StickerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.StickerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.StickerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StickerMessage.toObject = function(includeInstance, msg) {
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
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.StickerMessage}
 */
proto.proto.StickerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.StickerMessage;
  return proto.proto.StickerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.StickerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.StickerMessage}
 */
proto.proto.StickerMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.StickerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.StickerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.StickerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StickerMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes fileSha256 = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.StickerMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes fileSha256 = 2;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getFilesha256_asB64 = function() {
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
proto.proto.StickerMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileEncSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.StickerMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileEncSha256 = 3;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getFileencsha256_asB64 = function() {
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
proto.proto.StickerMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes mediaKey = 4;
 * @return {!(string|Uint8Array)}
 */
proto.proto.StickerMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes mediaKey = 4;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getMediakey_asB64 = function() {
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
proto.proto.StickerMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string mimetype = 5;
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.proto.StickerMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 width = 7;
 * @return {number}
 */
proto.proto.StickerMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string directPath = 8;
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 fileLength = 9;
 * @return {number}
 */
proto.proto.StickerMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 10;
 * @return {number}
 */
proto.proto.StickerMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 firstFrameLength = 11;
 * @return {number}
 */
proto.proto.StickerMessage.prototype.getFirstframelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setFirstframelength = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearFirstframelength = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasFirstframelength = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes firstFrameSidecar = 12;
 * @return {!(string|Uint8Array)}
 */
proto.proto.StickerMessage.prototype.getFirstframesidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes firstFrameSidecar = 12;
 * This is a type-conversion wrapper around `getFirstframesidecar()`
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getFirstframesidecar_asB64 = function() {
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
proto.proto.StickerMessage.prototype.getFirstframesidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFirstframesidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setFirstframesidecar = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearFirstframesidecar = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasFirstframesidecar = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool isAnimated = 13;
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.getIsanimated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setIsanimated = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearIsanimated = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasIsanimated = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bytes pngThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.proto.StickerMessage.prototype.getPngthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes pngThumbnail = 16;
 * This is a type-conversion wrapper around `getPngthumbnail()`
 * @return {string}
 */
proto.proto.StickerMessage.prototype.getPngthumbnail_asB64 = function() {
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
proto.proto.StickerMessage.prototype.getPngthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPngthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.setPngthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearPngthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasPngthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.StickerMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.StickerMessage} returns this
*/
proto.proto.StickerMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.StickerMessage} returns this
 */
proto.proto.StickerMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StickerMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.FourRowTemplate.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.FourRowTemplate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.proto.FourRowTemplate.TitleCase = {
  TITLE_NOT_SET: 0,
  DOCUMENTMESSAGE: 1,
  HIGHLYSTRUCTUREDMESSAGE: 2,
  IMAGEMESSAGE: 3,
  VIDEOMESSAGE: 4,
  LOCATIONMESSAGE: 5
};

/**
 * @return {proto.proto.FourRowTemplate.TitleCase}
 */
proto.proto.FourRowTemplate.prototype.getTitleCase = function() {
  return /** @type {proto.proto.FourRowTemplate.TitleCase} */(jspb.Message.computeOneofCase(this, proto.proto.FourRowTemplate.oneofGroups_[0]));
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
proto.proto.FourRowTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FourRowTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FourRowTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FourRowTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: (f = msg.getContent()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f),
    footer: (f = msg.getFooter()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.proto.TemplateButton.toObject, includeInstance),
    documentmessage: (f = msg.getDocumentmessage()) && proto.proto.DocumentMessage.toObject(includeInstance, f),
    highlystructuredmessage: (f = msg.getHighlystructuredmessage()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f),
    imagemessage: (f = msg.getImagemessage()) && proto.proto.ImageMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.proto.VideoMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.proto.LocationMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.FourRowTemplate}
 */
proto.proto.FourRowTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FourRowTemplate;
  return proto.proto.FourRowTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FourRowTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FourRowTemplate}
 */
proto.proto.FourRowTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 7:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setFooter(value);
      break;
    case 8:
      var value = new proto.proto.TemplateButton;
      reader.readMessage(value,proto.proto.TemplateButton.deserializeBinaryFromReader);
      msg.addButtons(value);
      break;
    case 1:
      var value = new proto.proto.DocumentMessage;
      reader.readMessage(value,proto.proto.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 2:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setHighlystructuredmessage(value);
      break;
    case 3:
      var value = new proto.proto.ImageMessage;
      reader.readMessage(value,proto.proto.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.proto.VideoMessage;
      reader.readMessage(value,proto.proto.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 5:
      var value = new proto.proto.LocationMessage;
      reader.readMessage(value,proto.proto.LocationMessage.deserializeBinaryFromReader);
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
proto.proto.FourRowTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FourRowTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FourRowTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FourRowTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getFooter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.proto.TemplateButton.serializeBinaryToWriter
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = message.getHighlystructuredmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.proto.LocationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage content = 6;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.FourRowTemplate.prototype.getContent = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 6));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FourRowTemplate.prototype.hasContent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional HighlyStructuredMessage footer = 7;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.FourRowTemplate.prototype.getFooter = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 7));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setFooter = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearFooter = function() {
  return this.setFooter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FourRowTemplate.prototype.hasFooter = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated TemplateButton buttons = 8;
 * @return {!Array<!proto.proto.TemplateButton>}
 */
proto.proto.FourRowTemplate.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.proto.TemplateButton>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.TemplateButton, 8));
};


/**
 * @param {!Array<!proto.proto.TemplateButton>} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setButtonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.proto.TemplateButton=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TemplateButton}
 */
proto.proto.FourRowTemplate.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.proto.TemplateButton, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearButtonsList = function() {
  return this.setButtonsList([]);
};


/**
 * optional DocumentMessage documentMessage = 1;
 * @return {?proto.proto.DocumentMessage}
 */
proto.proto.FourRowTemplate.prototype.getDocumentmessage = function() {
  return /** @type{?proto.proto.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.DocumentMessage, 1));
};


/**
 * @param {?proto.proto.DocumentMessage|undefined} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FourRowTemplate.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage highlyStructuredMessage = 2;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.FourRowTemplate.prototype.getHighlystructuredmessage = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setHighlystructuredmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearHighlystructuredmessage = function() {
  return this.setHighlystructuredmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FourRowTemplate.prototype.hasHighlystructuredmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.proto.ImageMessage}
 */
proto.proto.FourRowTemplate.prototype.getImagemessage = function() {
  return /** @type{?proto.proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageMessage, 3));
};


/**
 * @param {?proto.proto.ImageMessage|undefined} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setImagemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FourRowTemplate.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoMessage videoMessage = 4;
 * @return {?proto.proto.VideoMessage}
 */
proto.proto.FourRowTemplate.prototype.getVideomessage = function() {
  return /** @type{?proto.proto.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.VideoMessage, 4));
};


/**
 * @param {?proto.proto.VideoMessage|undefined} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setVideomessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FourRowTemplate.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.proto.LocationMessage}
 */
proto.proto.FourRowTemplate.prototype.getLocationmessage = function() {
  return /** @type{?proto.proto.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.LocationMessage, 5));
};


/**
 * @param {?proto.proto.LocationMessage|undefined} value
 * @return {!proto.proto.FourRowTemplate} returns this
*/
proto.proto.FourRowTemplate.prototype.setLocationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FourRowTemplate} returns this
 */
proto.proto.FourRowTemplate.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FourRowTemplate.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.HydratedFourRowTemplate.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.HydratedFourRowTemplate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.proto.HydratedFourRowTemplate.TitleCase = {
  TITLE_NOT_SET: 0,
  DOCUMENTMESSAGE: 1,
  HYDRATEDTITLETEXT: 2,
  IMAGEMESSAGE: 3,
  VIDEOMESSAGE: 4,
  LOCATIONMESSAGE: 5
};

/**
 * @return {proto.proto.HydratedFourRowTemplate.TitleCase}
 */
proto.proto.HydratedFourRowTemplate.prototype.getTitleCase = function() {
  return /** @type {proto.proto.HydratedFourRowTemplate.TitleCase} */(jspb.Message.computeOneofCase(this, proto.proto.HydratedFourRowTemplate.oneofGroups_[0]));
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
proto.proto.HydratedFourRowTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HydratedFourRowTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HydratedFourRowTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedFourRowTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    hydratedcontenttext: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    hydratedfootertext: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    hydratedbuttonsList: jspb.Message.toObjectList(msg.getHydratedbuttonsList(),
    proto.proto.HydratedTemplateButton.toObject, includeInstance),
    templateid: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    documentmessage: (f = msg.getDocumentmessage()) && proto.proto.DocumentMessage.toObject(includeInstance, f),
    hydratedtitletext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    imagemessage: (f = msg.getImagemessage()) && proto.proto.ImageMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.proto.VideoMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.proto.LocationMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.HydratedFourRowTemplate}
 */
proto.proto.HydratedFourRowTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HydratedFourRowTemplate;
  return proto.proto.HydratedFourRowTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HydratedFourRowTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HydratedFourRowTemplate}
 */
proto.proto.HydratedFourRowTemplate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.HydratedTemplateButton;
      reader.readMessage(value,proto.proto.HydratedTemplateButton.deserializeBinaryFromReader);
      msg.addHydratedbuttons(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateid(value);
      break;
    case 1:
      var value = new proto.proto.DocumentMessage;
      reader.readMessage(value,proto.proto.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHydratedtitletext(value);
      break;
    case 3:
      var value = new proto.proto.ImageMessage;
      reader.readMessage(value,proto.proto.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.proto.VideoMessage;
      reader.readMessage(value,proto.proto.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 5:
      var value = new proto.proto.LocationMessage;
      reader.readMessage(value,proto.proto.LocationMessage.deserializeBinaryFromReader);
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
proto.proto.HydratedFourRowTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HydratedFourRowTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HydratedFourRowTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HydratedFourRowTemplate.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.HydratedTemplateButton.serializeBinaryToWriter
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
      proto.proto.DocumentMessage.serializeBinaryToWriter
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
      proto.proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.proto.LocationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hydratedContentText = 6;
 * @return {string}
 */
proto.proto.HydratedFourRowTemplate.prototype.getHydratedcontenttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.setHydratedcontenttext = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearHydratedcontenttext = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasHydratedcontenttext = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string hydratedFooterText = 7;
 * @return {string}
 */
proto.proto.HydratedFourRowTemplate.prototype.getHydratedfootertext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.setHydratedfootertext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearHydratedfootertext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasHydratedfootertext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated HydratedTemplateButton hydratedButtons = 8;
 * @return {!Array<!proto.proto.HydratedTemplateButton>}
 */
proto.proto.HydratedFourRowTemplate.prototype.getHydratedbuttonsList = function() {
  return /** @type{!Array<!proto.proto.HydratedTemplateButton>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.HydratedTemplateButton, 8));
};


/**
 * @param {!Array<!proto.proto.HydratedTemplateButton>} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
*/
proto.proto.HydratedFourRowTemplate.prototype.setHydratedbuttonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.proto.HydratedTemplateButton=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.HydratedTemplateButton}
 */
proto.proto.HydratedFourRowTemplate.prototype.addHydratedbuttons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.proto.HydratedTemplateButton, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearHydratedbuttonsList = function() {
  return this.setHydratedbuttonsList([]);
};


/**
 * optional string templateId = 9;
 * @return {string}
 */
proto.proto.HydratedFourRowTemplate.prototype.getTemplateid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.setTemplateid = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearTemplateid = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasTemplateid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DocumentMessage documentMessage = 1;
 * @return {?proto.proto.DocumentMessage}
 */
proto.proto.HydratedFourRowTemplate.prototype.getDocumentmessage = function() {
  return /** @type{?proto.proto.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.DocumentMessage, 1));
};


/**
 * @param {?proto.proto.DocumentMessage|undefined} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
*/
proto.proto.HydratedFourRowTemplate.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string hydratedTitleText = 2;
 * @return {string}
 */
proto.proto.HydratedFourRowTemplate.prototype.getHydratedtitletext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.setHydratedtitletext = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearHydratedtitletext = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.HydratedFourRowTemplate.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasHydratedtitletext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.proto.ImageMessage}
 */
proto.proto.HydratedFourRowTemplate.prototype.getImagemessage = function() {
  return /** @type{?proto.proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageMessage, 3));
};


/**
 * @param {?proto.proto.ImageMessage|undefined} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
*/
proto.proto.HydratedFourRowTemplate.prototype.setImagemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoMessage videoMessage = 4;
 * @return {?proto.proto.VideoMessage}
 */
proto.proto.HydratedFourRowTemplate.prototype.getVideomessage = function() {
  return /** @type{?proto.proto.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.VideoMessage, 4));
};


/**
 * @param {?proto.proto.VideoMessage|undefined} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
*/
proto.proto.HydratedFourRowTemplate.prototype.setVideomessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.proto.LocationMessage}
 */
proto.proto.HydratedFourRowTemplate.prototype.getLocationmessage = function() {
  return /** @type{?proto.proto.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.LocationMessage, 5));
};


/**
 * @param {?proto.proto.LocationMessage|undefined} value
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
*/
proto.proto.HydratedFourRowTemplate.prototype.setLocationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.HydratedFourRowTemplate} returns this
 */
proto.proto.HydratedFourRowTemplate.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.HydratedFourRowTemplate.prototype.hasLocationmessage = function() {
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
proto.proto.TemplateMessage.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.TemplateMessage.FormatCase = {
  FORMAT_NOT_SET: 0,
  FOURROWTEMPLATE: 1,
  HYDRATEDFOURROWTEMPLATE: 2
};

/**
 * @return {proto.proto.TemplateMessage.FormatCase}
 */
proto.proto.TemplateMessage.prototype.getFormatCase = function() {
  return /** @type {proto.proto.TemplateMessage.FormatCase} */(jspb.Message.computeOneofCase(this, proto.proto.TemplateMessage.oneofGroups_[0]));
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
proto.proto.TemplateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TemplateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TemplateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemplateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f),
    hydratedtemplate: (f = msg.getHydratedtemplate()) && proto.proto.HydratedFourRowTemplate.toObject(includeInstance, f),
    fourrowtemplate: (f = msg.getFourrowtemplate()) && proto.proto.FourRowTemplate.toObject(includeInstance, f),
    hydratedfourrowtemplate: (f = msg.getHydratedfourrowtemplate()) && proto.proto.HydratedFourRowTemplate.toObject(includeInstance, f)
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
 * @return {!proto.proto.TemplateMessage}
 */
proto.proto.TemplateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TemplateMessage;
  return proto.proto.TemplateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TemplateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TemplateMessage}
 */
proto.proto.TemplateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 4:
      var value = new proto.proto.HydratedFourRowTemplate;
      reader.readMessage(value,proto.proto.HydratedFourRowTemplate.deserializeBinaryFromReader);
      msg.setHydratedtemplate(value);
      break;
    case 1:
      var value = new proto.proto.FourRowTemplate;
      reader.readMessage(value,proto.proto.FourRowTemplate.deserializeBinaryFromReader);
      msg.setFourrowtemplate(value);
      break;
    case 2:
      var value = new proto.proto.HydratedFourRowTemplate;
      reader.readMessage(value,proto.proto.HydratedFourRowTemplate.deserializeBinaryFromReader);
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
proto.proto.TemplateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TemplateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TemplateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemplateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = message.getHydratedtemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.HydratedFourRowTemplate.serializeBinaryToWriter
    );
  }
  f = message.getFourrowtemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.FourRowTemplate.serializeBinaryToWriter
    );
  }
  f = message.getHydratedfourrowtemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.HydratedFourRowTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContextInfo contextInfo = 3;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.TemplateMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 3));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.TemplateMessage} returns this
*/
proto.proto.TemplateMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateMessage} returns this
 */
proto.proto.TemplateMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional HydratedFourRowTemplate hydratedTemplate = 4;
 * @return {?proto.proto.HydratedFourRowTemplate}
 */
proto.proto.TemplateMessage.prototype.getHydratedtemplate = function() {
  return /** @type{?proto.proto.HydratedFourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.proto.HydratedFourRowTemplate, 4));
};


/**
 * @param {?proto.proto.HydratedFourRowTemplate|undefined} value
 * @return {!proto.proto.TemplateMessage} returns this
*/
proto.proto.TemplateMessage.prototype.setHydratedtemplate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateMessage} returns this
 */
proto.proto.TemplateMessage.prototype.clearHydratedtemplate = function() {
  return this.setHydratedtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateMessage.prototype.hasHydratedtemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FourRowTemplate fourRowTemplate = 1;
 * @return {?proto.proto.FourRowTemplate}
 */
proto.proto.TemplateMessage.prototype.getFourrowtemplate = function() {
  return /** @type{?proto.proto.FourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.proto.FourRowTemplate, 1));
};


/**
 * @param {?proto.proto.FourRowTemplate|undefined} value
 * @return {!proto.proto.TemplateMessage} returns this
*/
proto.proto.TemplateMessage.prototype.setFourrowtemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.TemplateMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateMessage} returns this
 */
proto.proto.TemplateMessage.prototype.clearFourrowtemplate = function() {
  return this.setFourrowtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateMessage.prototype.hasFourrowtemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HydratedFourRowTemplate hydratedFourRowTemplate = 2;
 * @return {?proto.proto.HydratedFourRowTemplate}
 */
proto.proto.TemplateMessage.prototype.getHydratedfourrowtemplate = function() {
  return /** @type{?proto.proto.HydratedFourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.proto.HydratedFourRowTemplate, 2));
};


/**
 * @param {?proto.proto.HydratedFourRowTemplate|undefined} value
 * @return {!proto.proto.TemplateMessage} returns this
*/
proto.proto.TemplateMessage.prototype.setHydratedfourrowtemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.TemplateMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateMessage} returns this
 */
proto.proto.TemplateMessage.prototype.clearHydratedfourrowtemplate = function() {
  return this.setHydratedfourrowtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateMessage.prototype.hasHydratedfourrowtemplate = function() {
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
proto.proto.TemplateButtonReplyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TemplateButtonReplyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TemplateButtonReplyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemplateButtonReplyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectedid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    selecteddisplaytext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f),
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
 * @return {!proto.proto.TemplateButtonReplyMessage}
 */
proto.proto.TemplateButtonReplyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TemplateButtonReplyMessage;
  return proto.proto.TemplateButtonReplyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TemplateButtonReplyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TemplateButtonReplyMessage}
 */
proto.proto.TemplateButtonReplyMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.TemplateButtonReplyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TemplateButtonReplyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TemplateButtonReplyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemplateButtonReplyMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
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
proto.proto.TemplateButtonReplyMessage.prototype.getSelectedid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
 */
proto.proto.TemplateButtonReplyMessage.prototype.setSelectedid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
 */
proto.proto.TemplateButtonReplyMessage.prototype.clearSelectedid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButtonReplyMessage.prototype.hasSelectedid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string selectedDisplayText = 2;
 * @return {string}
 */
proto.proto.TemplateButtonReplyMessage.prototype.getSelecteddisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
 */
proto.proto.TemplateButtonReplyMessage.prototype.setSelecteddisplaytext = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
 */
proto.proto.TemplateButtonReplyMessage.prototype.clearSelecteddisplaytext = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButtonReplyMessage.prototype.hasSelecteddisplaytext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContextInfo contextInfo = 3;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.TemplateButtonReplyMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 3));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
*/
proto.proto.TemplateButtonReplyMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
 */
proto.proto.TemplateButtonReplyMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButtonReplyMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 selectedIndex = 4;
 * @return {number}
 */
proto.proto.TemplateButtonReplyMessage.prototype.getSelectedindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
 */
proto.proto.TemplateButtonReplyMessage.prototype.setSelectedindex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.TemplateButtonReplyMessage} returns this
 */
proto.proto.TemplateButtonReplyMessage.prototype.clearSelectedindex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TemplateButtonReplyMessage.prototype.hasSelectedindex = function() {
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
proto.proto.CatalogSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CatalogSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CatalogSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CatalogSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalogimage: (f = msg.getCatalogimage()) && proto.proto.ImageMessage.toObject(includeInstance, f),
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
 * @return {!proto.proto.CatalogSnapshot}
 */
proto.proto.CatalogSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CatalogSnapshot;
  return proto.proto.CatalogSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CatalogSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CatalogSnapshot}
 */
proto.proto.CatalogSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ImageMessage;
      reader.readMessage(value,proto.proto.ImageMessage.deserializeBinaryFromReader);
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
proto.proto.CatalogSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CatalogSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CatalogSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CatalogSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCatalogimage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.ImageMessage.serializeBinaryToWriter
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
 * @return {?proto.proto.ImageMessage}
 */
proto.proto.CatalogSnapshot.prototype.getCatalogimage = function() {
  return /** @type{?proto.proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageMessage, 1));
};


/**
 * @param {?proto.proto.ImageMessage|undefined} value
 * @return {!proto.proto.CatalogSnapshot} returns this
*/
proto.proto.CatalogSnapshot.prototype.setCatalogimage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CatalogSnapshot} returns this
 */
proto.proto.CatalogSnapshot.prototype.clearCatalogimage = function() {
  return this.setCatalogimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CatalogSnapshot.prototype.hasCatalogimage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.proto.CatalogSnapshot.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CatalogSnapshot} returns this
 */
proto.proto.CatalogSnapshot.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.CatalogSnapshot} returns this
 */
proto.proto.CatalogSnapshot.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CatalogSnapshot.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.proto.CatalogSnapshot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CatalogSnapshot} returns this
 */
proto.proto.CatalogSnapshot.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.CatalogSnapshot} returns this
 */
proto.proto.CatalogSnapshot.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CatalogSnapshot.prototype.hasDescription = function() {
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
proto.proto.ProductSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ProductSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ProductSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProductSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    productimage: (f = msg.getProductimage()) && proto.proto.ImageMessage.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProductSnapshot}
 */
proto.proto.ProductSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProductSnapshot;
  return proto.proto.ProductSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProductSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProductSnapshot}
 */
proto.proto.ProductSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ImageMessage;
      reader.readMessage(value,proto.proto.ImageMessage.deserializeBinaryFromReader);
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
proto.proto.ProductSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProductSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProductSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProductSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductimage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.ImageMessage.serializeBinaryToWriter
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
 * @return {?proto.proto.ImageMessage}
 */
proto.proto.ProductSnapshot.prototype.getProductimage = function() {
  return /** @type{?proto.proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageMessage, 1));
};


/**
 * @param {?proto.proto.ImageMessage|undefined} value
 * @return {!proto.proto.ProductSnapshot} returns this
*/
proto.proto.ProductSnapshot.prototype.setProductimage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearProductimage = function() {
  return this.setProductimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasProductimage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string productId = 2;
 * @return {string}
 */
proto.proto.ProductSnapshot.prototype.getProductid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setProductid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearProductid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasProductid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.proto.ProductSnapshot.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.proto.ProductSnapshot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string currencyCode = 5;
 * @return {string}
 */
proto.proto.ProductSnapshot.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setCurrencycode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearCurrencycode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasCurrencycode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 priceAmount1000 = 6;
 * @return {number}
 */
proto.proto.ProductSnapshot.prototype.getPriceamount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setPriceamount1000 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearPriceamount1000 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasPriceamount1000 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string retailerId = 7;
 * @return {string}
 */
proto.proto.ProductSnapshot.prototype.getRetailerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setRetailerid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearRetailerid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasRetailerid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string url = 8;
 * @return {string}
 */
proto.proto.ProductSnapshot.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 productImageCount = 9;
 * @return {number}
 */
proto.proto.ProductSnapshot.prototype.getProductimagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setProductimagecount = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearProductimagecount = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasProductimagecount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string firstImageId = 11;
 * @return {string}
 */
proto.proto.ProductSnapshot.prototype.getFirstimageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.setFirstimageid = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductSnapshot} returns this
 */
proto.proto.ProductSnapshot.prototype.clearFirstimageid = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductSnapshot.prototype.hasFirstimageid = function() {
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
proto.proto.ProductMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ProductMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ProductMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProductMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && proto.proto.ProductSnapshot.toObject(includeInstance, f),
    businessownerjid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    catalog: (f = msg.getCatalog()) && proto.proto.CatalogSnapshot.toObject(includeInstance, f),
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.ProductMessage}
 */
proto.proto.ProductMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProductMessage;
  return proto.proto.ProductMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProductMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProductMessage}
 */
proto.proto.ProductMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ProductSnapshot;
      reader.readMessage(value,proto.proto.ProductSnapshot.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessownerjid(value);
      break;
    case 4:
      var value = new proto.proto.CatalogSnapshot;
      reader.readMessage(value,proto.proto.CatalogSnapshot.deserializeBinaryFromReader);
      msg.setCatalog(value);
      break;
    case 17:
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.ProductMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProductMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProductMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProductMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.ProductSnapshot.serializeBinaryToWriter
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
      proto.proto.CatalogSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProductSnapshot product = 1;
 * @return {?proto.proto.ProductSnapshot}
 */
proto.proto.ProductMessage.prototype.getProduct = function() {
  return /** @type{?proto.proto.ProductSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.proto.ProductSnapshot, 1));
};


/**
 * @param {?proto.proto.ProductSnapshot|undefined} value
 * @return {!proto.proto.ProductMessage} returns this
*/
proto.proto.ProductMessage.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProductMessage} returns this
 */
proto.proto.ProductMessage.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductMessage.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string businessOwnerJid = 2;
 * @return {string}
 */
proto.proto.ProductMessage.prototype.getBusinessownerjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ProductMessage} returns this
 */
proto.proto.ProductMessage.prototype.setBusinessownerjid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProductMessage} returns this
 */
proto.proto.ProductMessage.prototype.clearBusinessownerjid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductMessage.prototype.hasBusinessownerjid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CatalogSnapshot catalog = 4;
 * @return {?proto.proto.CatalogSnapshot}
 */
proto.proto.ProductMessage.prototype.getCatalog = function() {
  return /** @type{?proto.proto.CatalogSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.proto.CatalogSnapshot, 4));
};


/**
 * @param {?proto.proto.CatalogSnapshot|undefined} value
 * @return {!proto.proto.ProductMessage} returns this
*/
proto.proto.ProductMessage.prototype.setCatalog = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProductMessage} returns this
 */
proto.proto.ProductMessage.prototype.clearCatalog = function() {
  return this.setCatalog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductMessage.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.ProductMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 17));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.ProductMessage} returns this
*/
proto.proto.ProductMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProductMessage} returns this
 */
proto.proto.ProductMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProductMessage.prototype.hasContextinfo = function() {
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
proto.proto.GroupInviteMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GroupInviteMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GroupInviteMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GroupInviteMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupjid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    invitecode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    inviteexpiration: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    groupname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    caption: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.proto.ContextInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.GroupInviteMessage}
 */
proto.proto.GroupInviteMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GroupInviteMessage;
  return proto.proto.GroupInviteMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GroupInviteMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GroupInviteMessage}
 */
proto.proto.GroupInviteMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.ContextInfo;
      reader.readMessage(value,proto.proto.ContextInfo.deserializeBinaryFromReader);
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
proto.proto.GroupInviteMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GroupInviteMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GroupInviteMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GroupInviteMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string groupJid = 1;
 * @return {string}
 */
proto.proto.GroupInviteMessage.prototype.getGroupjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.setGroupjid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.clearGroupjid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GroupInviteMessage.prototype.hasGroupjid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string inviteCode = 2;
 * @return {string}
 */
proto.proto.GroupInviteMessage.prototype.getInvitecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.setInvitecode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.clearInvitecode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GroupInviteMessage.prototype.hasInvitecode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 inviteExpiration = 3;
 * @return {number}
 */
proto.proto.GroupInviteMessage.prototype.getInviteexpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.setInviteexpiration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.clearInviteexpiration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GroupInviteMessage.prototype.hasInviteexpiration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string groupName = 4;
 * @return {string}
 */
proto.proto.GroupInviteMessage.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.setGroupname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.clearGroupname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GroupInviteMessage.prototype.hasGroupname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes jpegThumbnail = 5;
 * @return {!(string|Uint8Array)}
 */
proto.proto.GroupInviteMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes jpegThumbnail = 5;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.proto.GroupInviteMessage.prototype.getJpegthumbnail_asB64 = function() {
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
proto.proto.GroupInviteMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GroupInviteMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string caption = 6;
 * @return {string}
 */
proto.proto.GroupInviteMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GroupInviteMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ContextInfo contextInfo = 7;
 * @return {?proto.proto.ContextInfo}
 */
proto.proto.GroupInviteMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContextInfo, 7));
};


/**
 * @param {?proto.proto.ContextInfo|undefined} value
 * @return {!proto.proto.GroupInviteMessage} returns this
*/
proto.proto.GroupInviteMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GroupInviteMessage} returns this
 */
proto.proto.GroupInviteMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GroupInviteMessage.prototype.hasContextinfo = function() {
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
proto.proto.DeviceSentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeviceSentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeviceSentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeviceSentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationjid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    message: (f = msg.getMessage()) && proto.proto.Message.toObject(includeInstance, f),
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
 * @return {!proto.proto.DeviceSentMessage}
 */
proto.proto.DeviceSentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeviceSentMessage;
  return proto.proto.DeviceSentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeviceSentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeviceSentMessage}
 */
proto.proto.DeviceSentMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.Message;
      reader.readMessage(value,proto.proto.Message.deserializeBinaryFromReader);
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
proto.proto.DeviceSentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeviceSentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeviceSentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeviceSentMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.Message.serializeBinaryToWriter
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
proto.proto.DeviceSentMessage.prototype.getDestinationjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeviceSentMessage} returns this
 */
proto.proto.DeviceSentMessage.prototype.setDestinationjid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DeviceSentMessage} returns this
 */
proto.proto.DeviceSentMessage.prototype.clearDestinationjid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DeviceSentMessage.prototype.hasDestinationjid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.proto.Message}
 */
proto.proto.DeviceSentMessage.prototype.getMessage = function() {
  return /** @type{?proto.proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.proto.Message, 2));
};


/**
 * @param {?proto.proto.Message|undefined} value
 * @return {!proto.proto.DeviceSentMessage} returns this
*/
proto.proto.DeviceSentMessage.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.DeviceSentMessage} returns this
 */
proto.proto.DeviceSentMessage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DeviceSentMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phash = 3;
 * @return {string}
 */
proto.proto.DeviceSentMessage.prototype.getPhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeviceSentMessage} returns this
 */
proto.proto.DeviceSentMessage.prototype.setPhash = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.DeviceSentMessage} returns this
 */
proto.proto.DeviceSentMessage.prototype.clearPhash = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DeviceSentMessage.prototype.hasPhash = function() {
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
proto.proto.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversation: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    senderkeydistributionmessage: (f = msg.getSenderkeydistributionmessage()) && proto.proto.SenderKeyDistributionMessage.toObject(includeInstance, f),
    imagemessage: (f = msg.getImagemessage()) && proto.proto.ImageMessage.toObject(includeInstance, f),
    contactmessage: (f = msg.getContactmessage()) && proto.proto.ContactMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.proto.LocationMessage.toObject(includeInstance, f),
    extendedtextmessage: (f = msg.getExtendedtextmessage()) && proto.proto.ExtendedTextMessage.toObject(includeInstance, f),
    documentmessage: (f = msg.getDocumentmessage()) && proto.proto.DocumentMessage.toObject(includeInstance, f),
    audiomessage: (f = msg.getAudiomessage()) && proto.proto.AudioMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.proto.VideoMessage.toObject(includeInstance, f),
    call: (f = msg.getCall()) && proto.proto.Call.toObject(includeInstance, f),
    chat: (f = msg.getChat()) && proto.proto.Chat.toObject(includeInstance, f),
    protocolmessage: (f = msg.getProtocolmessage()) && proto.proto.ProtocolMessage.toObject(includeInstance, f),
    contactsarraymessage: (f = msg.getContactsarraymessage()) && proto.proto.ContactsArrayMessage.toObject(includeInstance, f),
    highlystructuredmessage: (f = msg.getHighlystructuredmessage()) && proto.proto.HighlyStructuredMessage.toObject(includeInstance, f),
    fastratchetkeysenderkeydistributionmessage: (f = msg.getFastratchetkeysenderkeydistributionmessage()) && proto.proto.SenderKeyDistributionMessage.toObject(includeInstance, f),
    sendpaymentmessage: (f = msg.getSendpaymentmessage()) && proto.proto.SendPaymentMessage.toObject(includeInstance, f),
    livelocationmessage: (f = msg.getLivelocationmessage()) && proto.proto.LiveLocationMessage.toObject(includeInstance, f),
    requestpaymentmessage: (f = msg.getRequestpaymentmessage()) && proto.proto.RequestPaymentMessage.toObject(includeInstance, f),
    declinepaymentrequestmessage: (f = msg.getDeclinepaymentrequestmessage()) && proto.proto.DeclinePaymentRequestMessage.toObject(includeInstance, f),
    cancelpaymentrequestmessage: (f = msg.getCancelpaymentrequestmessage()) && proto.proto.CancelPaymentRequestMessage.toObject(includeInstance, f),
    templatemessage: (f = msg.getTemplatemessage()) && proto.proto.TemplateMessage.toObject(includeInstance, f),
    stickermessage: (f = msg.getStickermessage()) && proto.proto.StickerMessage.toObject(includeInstance, f),
    groupinvitemessage: (f = msg.getGroupinvitemessage()) && proto.proto.GroupInviteMessage.toObject(includeInstance, f),
    templatebuttonreplymessage: (f = msg.getTemplatebuttonreplymessage()) && proto.proto.TemplateButtonReplyMessage.toObject(includeInstance, f),
    productmessage: (f = msg.getProductmessage()) && proto.proto.ProductMessage.toObject(includeInstance, f),
    devicesentmessage: (f = msg.getDevicesentmessage()) && proto.proto.DeviceSentMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.Message}
 */
proto.proto.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Message;
  return proto.proto.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Message}
 */
proto.proto.Message.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.SenderKeyDistributionMessage;
      reader.readMessage(value,proto.proto.SenderKeyDistributionMessage.deserializeBinaryFromReader);
      msg.setSenderkeydistributionmessage(value);
      break;
    case 3:
      var value = new proto.proto.ImageMessage;
      reader.readMessage(value,proto.proto.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.proto.ContactMessage;
      reader.readMessage(value,proto.proto.ContactMessage.deserializeBinaryFromReader);
      msg.setContactmessage(value);
      break;
    case 5:
      var value = new proto.proto.LocationMessage;
      reader.readMessage(value,proto.proto.LocationMessage.deserializeBinaryFromReader);
      msg.setLocationmessage(value);
      break;
    case 6:
      var value = new proto.proto.ExtendedTextMessage;
      reader.readMessage(value,proto.proto.ExtendedTextMessage.deserializeBinaryFromReader);
      msg.setExtendedtextmessage(value);
      break;
    case 7:
      var value = new proto.proto.DocumentMessage;
      reader.readMessage(value,proto.proto.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 8:
      var value = new proto.proto.AudioMessage;
      reader.readMessage(value,proto.proto.AudioMessage.deserializeBinaryFromReader);
      msg.setAudiomessage(value);
      break;
    case 9:
      var value = new proto.proto.VideoMessage;
      reader.readMessage(value,proto.proto.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 10:
      var value = new proto.proto.Call;
      reader.readMessage(value,proto.proto.Call.deserializeBinaryFromReader);
      msg.setCall(value);
      break;
    case 11:
      var value = new proto.proto.Chat;
      reader.readMessage(value,proto.proto.Chat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 12:
      var value = new proto.proto.ProtocolMessage;
      reader.readMessage(value,proto.proto.ProtocolMessage.deserializeBinaryFromReader);
      msg.setProtocolmessage(value);
      break;
    case 13:
      var value = new proto.proto.ContactsArrayMessage;
      reader.readMessage(value,proto.proto.ContactsArrayMessage.deserializeBinaryFromReader);
      msg.setContactsarraymessage(value);
      break;
    case 14:
      var value = new proto.proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setHighlystructuredmessage(value);
      break;
    case 15:
      var value = new proto.proto.SenderKeyDistributionMessage;
      reader.readMessage(value,proto.proto.SenderKeyDistributionMessage.deserializeBinaryFromReader);
      msg.setFastratchetkeysenderkeydistributionmessage(value);
      break;
    case 16:
      var value = new proto.proto.SendPaymentMessage;
      reader.readMessage(value,proto.proto.SendPaymentMessage.deserializeBinaryFromReader);
      msg.setSendpaymentmessage(value);
      break;
    case 18:
      var value = new proto.proto.LiveLocationMessage;
      reader.readMessage(value,proto.proto.LiveLocationMessage.deserializeBinaryFromReader);
      msg.setLivelocationmessage(value);
      break;
    case 22:
      var value = new proto.proto.RequestPaymentMessage;
      reader.readMessage(value,proto.proto.RequestPaymentMessage.deserializeBinaryFromReader);
      msg.setRequestpaymentmessage(value);
      break;
    case 23:
      var value = new proto.proto.DeclinePaymentRequestMessage;
      reader.readMessage(value,proto.proto.DeclinePaymentRequestMessage.deserializeBinaryFromReader);
      msg.setDeclinepaymentrequestmessage(value);
      break;
    case 24:
      var value = new proto.proto.CancelPaymentRequestMessage;
      reader.readMessage(value,proto.proto.CancelPaymentRequestMessage.deserializeBinaryFromReader);
      msg.setCancelpaymentrequestmessage(value);
      break;
    case 25:
      var value = new proto.proto.TemplateMessage;
      reader.readMessage(value,proto.proto.TemplateMessage.deserializeBinaryFromReader);
      msg.setTemplatemessage(value);
      break;
    case 26:
      var value = new proto.proto.StickerMessage;
      reader.readMessage(value,proto.proto.StickerMessage.deserializeBinaryFromReader);
      msg.setStickermessage(value);
      break;
    case 28:
      var value = new proto.proto.GroupInviteMessage;
      reader.readMessage(value,proto.proto.GroupInviteMessage.deserializeBinaryFromReader);
      msg.setGroupinvitemessage(value);
      break;
    case 29:
      var value = new proto.proto.TemplateButtonReplyMessage;
      reader.readMessage(value,proto.proto.TemplateButtonReplyMessage.deserializeBinaryFromReader);
      msg.setTemplatebuttonreplymessage(value);
      break;
    case 30:
      var value = new proto.proto.ProductMessage;
      reader.readMessage(value,proto.proto.ProductMessage.deserializeBinaryFromReader);
      msg.setProductmessage(value);
      break;
    case 31:
      var value = new proto.proto.DeviceSentMessage;
      reader.readMessage(value,proto.proto.DeviceSentMessage.deserializeBinaryFromReader);
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
proto.proto.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Message.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.SenderKeyDistributionMessage.serializeBinaryToWriter
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getContactmessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.ContactMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.proto.LocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getExtendedtextmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.proto.ExtendedTextMessage.serializeBinaryToWriter
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.proto.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = message.getAudiomessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.proto.AudioMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.proto.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getCall();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.proto.Call.serializeBinaryToWriter
    );
  }
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.proto.Chat.serializeBinaryToWriter
    );
  }
  f = message.getProtocolmessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.proto.ProtocolMessage.serializeBinaryToWriter
    );
  }
  f = message.getContactsarraymessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.proto.ContactsArrayMessage.serializeBinaryToWriter
    );
  }
  f = message.getHighlystructuredmessage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getFastratchetkeysenderkeydistributionmessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.proto.SenderKeyDistributionMessage.serializeBinaryToWriter
    );
  }
  f = message.getSendpaymentmessage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.proto.SendPaymentMessage.serializeBinaryToWriter
    );
  }
  f = message.getLivelocationmessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.proto.LiveLocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestpaymentmessage();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.proto.RequestPaymentMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeclinepaymentrequestmessage();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.proto.DeclinePaymentRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getCancelpaymentrequestmessage();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.proto.CancelPaymentRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getTemplatemessage();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.proto.TemplateMessage.serializeBinaryToWriter
    );
  }
  f = message.getStickermessage();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.proto.StickerMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupinvitemessage();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.proto.GroupInviteMessage.serializeBinaryToWriter
    );
  }
  f = message.getTemplatebuttonreplymessage();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.proto.TemplateButtonReplyMessage.serializeBinaryToWriter
    );
  }
  f = message.getProductmessage();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.proto.ProductMessage.serializeBinaryToWriter
    );
  }
  f = message.getDevicesentmessage();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.proto.DeviceSentMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversation = 1;
 * @return {string}
 */
proto.proto.Message.prototype.getConversation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.setConversation = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearConversation = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SenderKeyDistributionMessage senderKeyDistributionMessage = 2;
 * @return {?proto.proto.SenderKeyDistributionMessage}
 */
proto.proto.Message.prototype.getSenderkeydistributionmessage = function() {
  return /** @type{?proto.proto.SenderKeyDistributionMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.SenderKeyDistributionMessage, 2));
};


/**
 * @param {?proto.proto.SenderKeyDistributionMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setSenderkeydistributionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearSenderkeydistributionmessage = function() {
  return this.setSenderkeydistributionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasSenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.proto.ImageMessage}
 */
proto.proto.Message.prototype.getImagemessage = function() {
  return /** @type{?proto.proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageMessage, 3));
};


/**
 * @param {?proto.proto.ImageMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setImagemessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ContactMessage contactMessage = 4;
 * @return {?proto.proto.ContactMessage}
 */
proto.proto.Message.prototype.getContactmessage = function() {
  return /** @type{?proto.proto.ContactMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContactMessage, 4));
};


/**
 * @param {?proto.proto.ContactMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setContactmessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearContactmessage = function() {
  return this.setContactmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasContactmessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.proto.LocationMessage}
 */
proto.proto.Message.prototype.getLocationmessage = function() {
  return /** @type{?proto.proto.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.LocationMessage, 5));
};


/**
 * @param {?proto.proto.LocationMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setLocationmessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ExtendedTextMessage extendedTextMessage = 6;
 * @return {?proto.proto.ExtendedTextMessage}
 */
proto.proto.Message.prototype.getExtendedtextmessage = function() {
  return /** @type{?proto.proto.ExtendedTextMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ExtendedTextMessage, 6));
};


/**
 * @param {?proto.proto.ExtendedTextMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setExtendedtextmessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearExtendedtextmessage = function() {
  return this.setExtendedtextmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasExtendedtextmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DocumentMessage documentMessage = 7;
 * @return {?proto.proto.DocumentMessage}
 */
proto.proto.Message.prototype.getDocumentmessage = function() {
  return /** @type{?proto.proto.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.DocumentMessage, 7));
};


/**
 * @param {?proto.proto.DocumentMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AudioMessage audioMessage = 8;
 * @return {?proto.proto.AudioMessage}
 */
proto.proto.Message.prototype.getAudiomessage = function() {
  return /** @type{?proto.proto.AudioMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.AudioMessage, 8));
};


/**
 * @param {?proto.proto.AudioMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setAudiomessage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearAudiomessage = function() {
  return this.setAudiomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasAudiomessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional VideoMessage videoMessage = 9;
 * @return {?proto.proto.VideoMessage}
 */
proto.proto.Message.prototype.getVideomessage = function() {
  return /** @type{?proto.proto.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.VideoMessage, 9));
};


/**
 * @param {?proto.proto.VideoMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setVideomessage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Call call = 10;
 * @return {?proto.proto.Call}
 */
proto.proto.Message.prototype.getCall = function() {
  return /** @type{?proto.proto.Call} */ (
    jspb.Message.getWrapperField(this, proto.proto.Call, 10));
};


/**
 * @param {?proto.proto.Call|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setCall = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearCall = function() {
  return this.setCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasCall = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Chat chat = 11;
 * @return {?proto.proto.Chat}
 */
proto.proto.Message.prototype.getChat = function() {
  return /** @type{?proto.proto.Chat} */ (
    jspb.Message.getWrapperField(this, proto.proto.Chat, 11));
};


/**
 * @param {?proto.proto.Chat|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasChat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ProtocolMessage protocolMessage = 12;
 * @return {?proto.proto.ProtocolMessage}
 */
proto.proto.Message.prototype.getProtocolmessage = function() {
  return /** @type{?proto.proto.ProtocolMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ProtocolMessage, 12));
};


/**
 * @param {?proto.proto.ProtocolMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setProtocolmessage = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearProtocolmessage = function() {
  return this.setProtocolmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasProtocolmessage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ContactsArrayMessage contactsArrayMessage = 13;
 * @return {?proto.proto.ContactsArrayMessage}
 */
proto.proto.Message.prototype.getContactsarraymessage = function() {
  return /** @type{?proto.proto.ContactsArrayMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContactsArrayMessage, 13));
};


/**
 * @param {?proto.proto.ContactsArrayMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setContactsarraymessage = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearContactsarraymessage = function() {
  return this.setContactsarraymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasContactsarraymessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional HighlyStructuredMessage highlyStructuredMessage = 14;
 * @return {?proto.proto.HighlyStructuredMessage}
 */
proto.proto.Message.prototype.getHighlystructuredmessage = function() {
  return /** @type{?proto.proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.HighlyStructuredMessage, 14));
};


/**
 * @param {?proto.proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setHighlystructuredmessage = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearHighlystructuredmessage = function() {
  return this.setHighlystructuredmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasHighlystructuredmessage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional SenderKeyDistributionMessage fastRatchetKeySenderKeyDistributionMessage = 15;
 * @return {?proto.proto.SenderKeyDistributionMessage}
 */
proto.proto.Message.prototype.getFastratchetkeysenderkeydistributionmessage = function() {
  return /** @type{?proto.proto.SenderKeyDistributionMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.SenderKeyDistributionMessage, 15));
};


/**
 * @param {?proto.proto.SenderKeyDistributionMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setFastratchetkeysenderkeydistributionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearFastratchetkeysenderkeydistributionmessage = function() {
  return this.setFastratchetkeysenderkeydistributionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasFastratchetkeysenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional SendPaymentMessage sendPaymentMessage = 16;
 * @return {?proto.proto.SendPaymentMessage}
 */
proto.proto.Message.prototype.getSendpaymentmessage = function() {
  return /** @type{?proto.proto.SendPaymentMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.SendPaymentMessage, 16));
};


/**
 * @param {?proto.proto.SendPaymentMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setSendpaymentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearSendpaymentmessage = function() {
  return this.setSendpaymentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasSendpaymentmessage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional LiveLocationMessage liveLocationMessage = 18;
 * @return {?proto.proto.LiveLocationMessage}
 */
proto.proto.Message.prototype.getLivelocationmessage = function() {
  return /** @type{?proto.proto.LiveLocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.LiveLocationMessage, 18));
};


/**
 * @param {?proto.proto.LiveLocationMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setLivelocationmessage = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearLivelocationmessage = function() {
  return this.setLivelocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasLivelocationmessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional RequestPaymentMessage requestPaymentMessage = 22;
 * @return {?proto.proto.RequestPaymentMessage}
 */
proto.proto.Message.prototype.getRequestpaymentmessage = function() {
  return /** @type{?proto.proto.RequestPaymentMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.RequestPaymentMessage, 22));
};


/**
 * @param {?proto.proto.RequestPaymentMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setRequestpaymentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearRequestpaymentmessage = function() {
  return this.setRequestpaymentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasRequestpaymentmessage = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional DeclinePaymentRequestMessage declinePaymentRequestMessage = 23;
 * @return {?proto.proto.DeclinePaymentRequestMessage}
 */
proto.proto.Message.prototype.getDeclinepaymentrequestmessage = function() {
  return /** @type{?proto.proto.DeclinePaymentRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.DeclinePaymentRequestMessage, 23));
};


/**
 * @param {?proto.proto.DeclinePaymentRequestMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setDeclinepaymentrequestmessage = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearDeclinepaymentrequestmessage = function() {
  return this.setDeclinepaymentrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasDeclinepaymentrequestmessage = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CancelPaymentRequestMessage cancelPaymentRequestMessage = 24;
 * @return {?proto.proto.CancelPaymentRequestMessage}
 */
proto.proto.Message.prototype.getCancelpaymentrequestmessage = function() {
  return /** @type{?proto.proto.CancelPaymentRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.CancelPaymentRequestMessage, 24));
};


/**
 * @param {?proto.proto.CancelPaymentRequestMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setCancelpaymentrequestmessage = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearCancelpaymentrequestmessage = function() {
  return this.setCancelpaymentrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasCancelpaymentrequestmessage = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional TemplateMessage templateMessage = 25;
 * @return {?proto.proto.TemplateMessage}
 */
proto.proto.Message.prototype.getTemplatemessage = function() {
  return /** @type{?proto.proto.TemplateMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.TemplateMessage, 25));
};


/**
 * @param {?proto.proto.TemplateMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setTemplatemessage = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearTemplatemessage = function() {
  return this.setTemplatemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasTemplatemessage = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional StickerMessage stickerMessage = 26;
 * @return {?proto.proto.StickerMessage}
 */
proto.proto.Message.prototype.getStickermessage = function() {
  return /** @type{?proto.proto.StickerMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.StickerMessage, 26));
};


/**
 * @param {?proto.proto.StickerMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setStickermessage = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearStickermessage = function() {
  return this.setStickermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasStickermessage = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional GroupInviteMessage groupInviteMessage = 28;
 * @return {?proto.proto.GroupInviteMessage}
 */
proto.proto.Message.prototype.getGroupinvitemessage = function() {
  return /** @type{?proto.proto.GroupInviteMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.GroupInviteMessage, 28));
};


/**
 * @param {?proto.proto.GroupInviteMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setGroupinvitemessage = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearGroupinvitemessage = function() {
  return this.setGroupinvitemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasGroupinvitemessage = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional TemplateButtonReplyMessage templateButtonReplyMessage = 29;
 * @return {?proto.proto.TemplateButtonReplyMessage}
 */
proto.proto.Message.prototype.getTemplatebuttonreplymessage = function() {
  return /** @type{?proto.proto.TemplateButtonReplyMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.TemplateButtonReplyMessage, 29));
};


/**
 * @param {?proto.proto.TemplateButtonReplyMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setTemplatebuttonreplymessage = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearTemplatebuttonreplymessage = function() {
  return this.setTemplatebuttonreplymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasTemplatebuttonreplymessage = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional ProductMessage productMessage = 30;
 * @return {?proto.proto.ProductMessage}
 */
proto.proto.Message.prototype.getProductmessage = function() {
  return /** @type{?proto.proto.ProductMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.ProductMessage, 30));
};


/**
 * @param {?proto.proto.ProductMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setProductmessage = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearProductmessage = function() {
  return this.setProductmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasProductmessage = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional DeviceSentMessage deviceSentMessage = 31;
 * @return {?proto.proto.DeviceSentMessage}
 */
proto.proto.Message.prototype.getDevicesentmessage = function() {
  return /** @type{?proto.proto.DeviceSentMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.DeviceSentMessage, 31));
};


/**
 * @param {?proto.proto.DeviceSentMessage|undefined} value
 * @return {!proto.proto.Message} returns this
*/
proto.proto.Message.prototype.setDevicesentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Message} returns this
 */
proto.proto.Message.prototype.clearDevicesentmessage = function() {
  return this.setDevicesentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Message.prototype.hasDevicesentmessage = function() {
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
proto.proto.MessageKey.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.MessageKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.MessageKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.MessageKey.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.MessageKey}
 */
proto.proto.MessageKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.MessageKey;
  return proto.proto.MessageKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.MessageKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.MessageKey}
 */
proto.proto.MessageKey.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.MessageKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.MessageKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.MessageKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.MessageKey.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.MessageKey.prototype.getRemotejid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.setRemotejid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.clearRemotejid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.MessageKey.prototype.hasRemotejid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool fromMe = 2;
 * @return {boolean}
 */
proto.proto.MessageKey.prototype.getFromme = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.setFromme = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.clearFromme = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.MessageKey.prototype.hasFromme = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.proto.MessageKey.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.setId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.clearId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.MessageKey.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string participant = 4;
 * @return {string}
 */
proto.proto.MessageKey.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.MessageKey} returns this
 */
proto.proto.MessageKey.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.MessageKey.prototype.hasParticipant = function() {
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
proto.proto.WebFeatures.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WebFeatures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WebFeatures} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WebFeatures.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.WebFeatures}
 */
proto.proto.WebFeatures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WebFeatures;
  return proto.proto.WebFeatures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WebFeatures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WebFeatures}
 */
proto.proto.WebFeatures.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLabelsdisplay(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualoutgoing(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv3(value);
      break;
    case 4:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv3create(value);
      break;
    case 5:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setChangenumberv2(value);
      break;
    case 6:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQuerystatusv3thumbnail(value);
      break;
    case 7:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLivelocations(value);
      break;
    case 8:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQueryvname(value);
      break;
    case 9:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualincoming(value);
      break;
    case 10:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQuickrepliesquery(value);
      break;
    case 11:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setPayments(value);
      break;
    case 12:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStickerpackquery(value);
      break;
    case 13:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLivelocationsfinal(value);
      break;
    case 14:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLabelsedit(value);
      break;
    case 15:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setMediaupload(value);
      break;
    case 18:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setMediauploadrichquickreplies(value);
      break;
    case 19:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVnamev2(value);
      break;
    case 20:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVideoplaybackurl(value);
      break;
    case 21:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStatusranking(value);
      break;
    case 22:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualvideo(value);
      break;
    case 23:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setThirdpartystickers(value);
      break;
    case 24:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setFrequentlyforwardedsetting(value);
      break;
    case 25:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv4joinpermission(value);
      break;
    case 26:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setRecentstickers(value);
      break;
    case 27:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setCatalog(value);
      break;
    case 28:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStarredstickers(value);
      break;
    case 29:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipgroupcall(value);
      break;
    case 30:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setTemplatemessage(value);
      break;
    case 31:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setTemplatemessageinteractivity(value);
      break;
    case 32:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setEphemeralmessages(value);
      break;
    case 33:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setE2enotificationsync(value);
      break;
    case 34:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setRecentstickersv2(value);
      break;
    case 35:
      var value = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
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
proto.proto.WebFeatures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WebFeatures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WebFeatures} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WebFeatures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeEnum(
      25,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeEnum(
      29,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeEnum(
      30,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeEnum(
      32,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeEnum(
      33,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 35));
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
proto.proto.WebFeatures.WEB_FEATURES_FLAG = {
  NOT_STARTED: 0,
  FORCE_UPGRADE: 1,
  DEVELOPMENT: 2,
  PRODUCTION: 3
};

/**
 * optional WEB_FEATURES_FLAG labelsDisplay = 1;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getLabelsdisplay = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setLabelsdisplay = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearLabelsdisplay = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasLabelsdisplay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualOutgoing = 2;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getVoipindividualoutgoing = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setVoipindividualoutgoing = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearVoipindividualoutgoing = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasVoipindividualoutgoing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV3 = 3;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getGroupsv3 = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setGroupsv3 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearGroupsv3 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasGroupsv3 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV3Create = 4;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getGroupsv3create = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setGroupsv3create = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearGroupsv3create = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasGroupsv3create = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional WEB_FEATURES_FLAG changeNumberV2 = 5;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getChangenumberv2 = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setChangenumberv2 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearChangenumberv2 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasChangenumberv2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional WEB_FEATURES_FLAG queryStatusV3Thumbnail = 6;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getQuerystatusv3thumbnail = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setQuerystatusv3thumbnail = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearQuerystatusv3thumbnail = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasQuerystatusv3thumbnail = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WEB_FEATURES_FLAG liveLocations = 7;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getLivelocations = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setLivelocations = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearLivelocations = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasLivelocations = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WEB_FEATURES_FLAG queryVname = 8;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getQueryvname = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setQueryvname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearQueryvname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasQueryvname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualIncoming = 9;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getVoipindividualincoming = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setVoipindividualincoming = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearVoipindividualincoming = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasVoipindividualincoming = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional WEB_FEATURES_FLAG quickRepliesQuery = 10;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getQuickrepliesquery = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setQuickrepliesquery = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearQuickrepliesquery = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasQuickrepliesquery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WEB_FEATURES_FLAG payments = 11;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getPayments = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setPayments = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearPayments = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasPayments = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional WEB_FEATURES_FLAG stickerPackQuery = 12;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getStickerpackquery = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setStickerpackquery = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearStickerpackquery = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasStickerpackquery = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional WEB_FEATURES_FLAG liveLocationsFinal = 13;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getLivelocationsfinal = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setLivelocationsfinal = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearLivelocationsfinal = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasLivelocationsfinal = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional WEB_FEATURES_FLAG labelsEdit = 14;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getLabelsedit = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setLabelsedit = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearLabelsedit = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasLabelsedit = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional WEB_FEATURES_FLAG mediaUpload = 15;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getMediaupload = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setMediaupload = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearMediaupload = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasMediaupload = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional WEB_FEATURES_FLAG mediaUploadRichQuickReplies = 18;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getMediauploadrichquickreplies = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setMediauploadrichquickreplies = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearMediauploadrichquickreplies = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasMediauploadrichquickreplies = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional WEB_FEATURES_FLAG vnameV2 = 19;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getVnamev2 = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setVnamev2 = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearVnamev2 = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasVnamev2 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional WEB_FEATURES_FLAG videoPlaybackUrl = 20;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getVideoplaybackurl = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setVideoplaybackurl = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearVideoplaybackurl = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasVideoplaybackurl = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional WEB_FEATURES_FLAG statusRanking = 21;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getStatusranking = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setStatusranking = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearStatusranking = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasStatusranking = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualVideo = 22;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getVoipindividualvideo = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setVoipindividualvideo = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearVoipindividualvideo = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasVoipindividualvideo = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional WEB_FEATURES_FLAG thirdPartyStickers = 23;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getThirdpartystickers = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setThirdpartystickers = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearThirdpartystickers = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasThirdpartystickers = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional WEB_FEATURES_FLAG frequentlyForwardedSetting = 24;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getFrequentlyforwardedsetting = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setFrequentlyforwardedsetting = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearFrequentlyforwardedsetting = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasFrequentlyforwardedsetting = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV4JoinPermission = 25;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getGroupsv4joinpermission = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setGroupsv4joinpermission = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearGroupsv4joinpermission = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasGroupsv4joinpermission = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional WEB_FEATURES_FLAG recentStickers = 26;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getRecentstickers = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setRecentstickers = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearRecentstickers = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasRecentstickers = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional WEB_FEATURES_FLAG catalog = 27;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getCatalog = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional WEB_FEATURES_FLAG starredStickers = 28;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getStarredstickers = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setStarredstickers = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearStarredstickers = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasStarredstickers = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipGroupCall = 29;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getVoipgroupcall = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setVoipgroupcall = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearVoipgroupcall = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasVoipgroupcall = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional WEB_FEATURES_FLAG templateMessage = 30;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getTemplatemessage = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setTemplatemessage = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearTemplatemessage = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasTemplatemessage = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional WEB_FEATURES_FLAG templateMessageInteractivity = 31;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getTemplatemessageinteractivity = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setTemplatemessageinteractivity = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearTemplatemessageinteractivity = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasTemplatemessageinteractivity = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional WEB_FEATURES_FLAG ephemeralMessages = 32;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getEphemeralmessages = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setEphemeralmessages = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearEphemeralmessages = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasEphemeralmessages = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional WEB_FEATURES_FLAG e2ENotificationSync = 33;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getE2enotificationsync = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setE2enotificationsync = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearE2enotificationsync = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasE2enotificationsync = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional WEB_FEATURES_FLAG recentStickersV2 = 34;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getRecentstickersv2 = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setRecentstickersv2 = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearRecentstickersv2 = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasRecentstickersv2 = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional WEB_FEATURES_FLAG syncdRelease1 = 35;
 * @return {!proto.proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.proto.WebFeatures.prototype.getSyncdrelease1 = function() {
  return /** @type {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {!proto.proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.setSyncdrelease1 = function(value) {
  return jspb.Message.setField(this, 35, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebFeatures} returns this
 */
proto.proto.WebFeatures.prototype.clearSyncdrelease1 = function() {
  return jspb.Message.setField(this, 35, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebFeatures.prototype.hasSyncdrelease1 = function() {
  return jspb.Message.getField(this, 35) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.TabletNotificationsInfo.repeatedFields_ = [5];



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
proto.proto.TabletNotificationsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TabletNotificationsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TabletNotificationsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TabletNotificationsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    unreadchats: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    notifymessagecount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    notifymessageList: jspb.Message.toObjectList(msg.getNotifymessageList(),
    proto.proto.NotificationMessageInfo.toObject, includeInstance)
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
 * @return {!proto.proto.TabletNotificationsInfo}
 */
proto.proto.TabletNotificationsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TabletNotificationsInfo;
  return proto.proto.TabletNotificationsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TabletNotificationsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TabletNotificationsInfo}
 */
proto.proto.TabletNotificationsInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.NotificationMessageInfo;
      reader.readMessage(value,proto.proto.NotificationMessageInfo.deserializeBinaryFromReader);
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
proto.proto.TabletNotificationsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TabletNotificationsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TabletNotificationsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TabletNotificationsInfo.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.NotificationMessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.proto.TabletNotificationsInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TabletNotificationsInfo} returns this
 */
proto.proto.TabletNotificationsInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.TabletNotificationsInfo} returns this
 */
proto.proto.TabletNotificationsInfo.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TabletNotificationsInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 unreadChats = 3;
 * @return {number}
 */
proto.proto.TabletNotificationsInfo.prototype.getUnreadchats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TabletNotificationsInfo} returns this
 */
proto.proto.TabletNotificationsInfo.prototype.setUnreadchats = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.TabletNotificationsInfo} returns this
 */
proto.proto.TabletNotificationsInfo.prototype.clearUnreadchats = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TabletNotificationsInfo.prototype.hasUnreadchats = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 notifyMessageCount = 4;
 * @return {number}
 */
proto.proto.TabletNotificationsInfo.prototype.getNotifymessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TabletNotificationsInfo} returns this
 */
proto.proto.TabletNotificationsInfo.prototype.setNotifymessagecount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.TabletNotificationsInfo} returns this
 */
proto.proto.TabletNotificationsInfo.prototype.clearNotifymessagecount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TabletNotificationsInfo.prototype.hasNotifymessagecount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated NotificationMessageInfo notifyMessage = 5;
 * @return {!Array<!proto.proto.NotificationMessageInfo>}
 */
proto.proto.TabletNotificationsInfo.prototype.getNotifymessageList = function() {
  return /** @type{!Array<!proto.proto.NotificationMessageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.NotificationMessageInfo, 5));
};


/**
 * @param {!Array<!proto.proto.NotificationMessageInfo>} value
 * @return {!proto.proto.TabletNotificationsInfo} returns this
*/
proto.proto.TabletNotificationsInfo.prototype.setNotifymessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.NotificationMessageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.NotificationMessageInfo}
 */
proto.proto.TabletNotificationsInfo.prototype.addNotifymessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.NotificationMessageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.TabletNotificationsInfo} returns this
 */
proto.proto.TabletNotificationsInfo.prototype.clearNotifymessageList = function() {
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
proto.proto.NotificationMessageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NotificationMessageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NotificationMessageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NotificationMessageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.proto.MessageKey.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.proto.Message.toObject(includeInstance, f),
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
 * @return {!proto.proto.NotificationMessageInfo}
 */
proto.proto.NotificationMessageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NotificationMessageInfo;
  return proto.proto.NotificationMessageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NotificationMessageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NotificationMessageInfo}
 */
proto.proto.NotificationMessageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.proto.Message;
      reader.readMessage(value,proto.proto.Message.deserializeBinaryFromReader);
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
proto.proto.NotificationMessageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NotificationMessageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NotificationMessageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NotificationMessageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.Message.serializeBinaryToWriter
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
 * @return {?proto.proto.MessageKey}
 */
proto.proto.NotificationMessageInfo.prototype.getKey = function() {
  return /** @type{?proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 1));
};


/**
 * @param {?proto.proto.MessageKey|undefined} value
 * @return {!proto.proto.NotificationMessageInfo} returns this
*/
proto.proto.NotificationMessageInfo.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.NotificationMessageInfo} returns this
 */
proto.proto.NotificationMessageInfo.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NotificationMessageInfo.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.proto.Message}
 */
proto.proto.NotificationMessageInfo.prototype.getMessage = function() {
  return /** @type{?proto.proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.proto.Message, 2));
};


/**
 * @param {?proto.proto.Message|undefined} value
 * @return {!proto.proto.NotificationMessageInfo} returns this
*/
proto.proto.NotificationMessageInfo.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.NotificationMessageInfo} returns this
 */
proto.proto.NotificationMessageInfo.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NotificationMessageInfo.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 messageTimestamp = 3;
 * @return {number}
 */
proto.proto.NotificationMessageInfo.prototype.getMessagetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.NotificationMessageInfo} returns this
 */
proto.proto.NotificationMessageInfo.prototype.setMessagetimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.NotificationMessageInfo} returns this
 */
proto.proto.NotificationMessageInfo.prototype.clearMessagetimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NotificationMessageInfo.prototype.hasMessagetimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string participant = 4;
 * @return {string}
 */
proto.proto.NotificationMessageInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.NotificationMessageInfo} returns this
 */
proto.proto.NotificationMessageInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.NotificationMessageInfo} returns this
 */
proto.proto.NotificationMessageInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NotificationMessageInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WebNotificationsInfo.repeatedFields_ = [5];



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
proto.proto.WebNotificationsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WebNotificationsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WebNotificationsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WebNotificationsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    unreadchats: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    notifymessagecount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    notifymessagesList: jspb.Message.toObjectList(msg.getNotifymessagesList(),
    proto.proto.WebMessageInfo.toObject, includeInstance)
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
 * @return {!proto.proto.WebNotificationsInfo}
 */
proto.proto.WebNotificationsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WebNotificationsInfo;
  return proto.proto.WebNotificationsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WebNotificationsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WebNotificationsInfo}
 */
proto.proto.WebNotificationsInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.WebMessageInfo;
      reader.readMessage(value,proto.proto.WebMessageInfo.deserializeBinaryFromReader);
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
proto.proto.WebNotificationsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WebNotificationsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WebNotificationsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WebNotificationsInfo.serializeBinaryToWriter = function(message, writer) {
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
      proto.proto.WebMessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.proto.WebNotificationsInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WebNotificationsInfo} returns this
 */
proto.proto.WebNotificationsInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebNotificationsInfo} returns this
 */
proto.proto.WebNotificationsInfo.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebNotificationsInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 unreadChats = 3;
 * @return {number}
 */
proto.proto.WebNotificationsInfo.prototype.getUnreadchats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WebNotificationsInfo} returns this
 */
proto.proto.WebNotificationsInfo.prototype.setUnreadchats = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebNotificationsInfo} returns this
 */
proto.proto.WebNotificationsInfo.prototype.clearUnreadchats = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebNotificationsInfo.prototype.hasUnreadchats = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 notifyMessageCount = 4;
 * @return {number}
 */
proto.proto.WebNotificationsInfo.prototype.getNotifymessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WebNotificationsInfo} returns this
 */
proto.proto.WebNotificationsInfo.prototype.setNotifymessagecount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebNotificationsInfo} returns this
 */
proto.proto.WebNotificationsInfo.prototype.clearNotifymessagecount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebNotificationsInfo.prototype.hasNotifymessagecount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated WebMessageInfo notifyMessages = 5;
 * @return {!Array<!proto.proto.WebMessageInfo>}
 */
proto.proto.WebNotificationsInfo.prototype.getNotifymessagesList = function() {
  return /** @type{!Array<!proto.proto.WebMessageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.WebMessageInfo, 5));
};


/**
 * @param {!Array<!proto.proto.WebMessageInfo>} value
 * @return {!proto.proto.WebNotificationsInfo} returns this
*/
proto.proto.WebNotificationsInfo.prototype.setNotifymessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.WebMessageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.WebMessageInfo}
 */
proto.proto.WebNotificationsInfo.prototype.addNotifymessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.WebMessageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WebNotificationsInfo} returns this
 */
proto.proto.WebNotificationsInfo.prototype.clearNotifymessagesList = function() {
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
proto.proto.PaymentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PaymentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PaymentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PaymentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencydeprecated: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount1000: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    receiverjid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    transactiontimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    requestmessagekey: (f = msg.getRequestmessagekey()) && proto.proto.MessageKey.toObject(includeInstance, f),
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
 * @return {!proto.proto.PaymentInfo}
 */
proto.proto.PaymentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PaymentInfo;
  return proto.proto.PaymentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PaymentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PaymentInfo}
 */
proto.proto.PaymentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (reader.readEnum());
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
      var value = /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_STATUS} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransactiontimestamp(value);
      break;
    case 6:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
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
      var value = /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (reader.readEnum());
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
proto.proto.PaymentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PaymentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PaymentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PaymentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (jspb.Message.getField(message, 1));
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
  f = /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_STATUS} */ (jspb.Message.getField(message, 4));
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
      proto.proto.MessageKey.serializeBinaryToWriter
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
  f = /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (jspb.Message.getField(message, 10));
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
proto.proto.PaymentInfo.PAYMENT_INFO_CURRENCY = {
  UNKNOWN_CURRENCY: 0,
  INR: 1
};

/**
 * @enum {number}
 */
proto.proto.PaymentInfo.PAYMENT_INFO_STATUS = {
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
proto.proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS = {
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
 * @return {!proto.proto.PaymentInfo.PAYMENT_INFO_CURRENCY}
 */
proto.proto.PaymentInfo.prototype.getCurrencydeprecated = function() {
  return /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.PaymentInfo.PAYMENT_INFO_CURRENCY} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setCurrencydeprecated = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearCurrencydeprecated = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasCurrencydeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount1000 = 2;
 * @return {number}
 */
proto.proto.PaymentInfo.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string receiverJid = 3;
 * @return {string}
 */
proto.proto.PaymentInfo.prototype.getReceiverjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setReceiverjid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearReceiverjid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasReceiverjid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PAYMENT_INFO_STATUS status = 4;
 * @return {!proto.proto.PaymentInfo.PAYMENT_INFO_STATUS}
 */
proto.proto.PaymentInfo.prototype.getStatus = function() {
  return /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_STATUS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.proto.PaymentInfo.PAYMENT_INFO_STATUS} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 transactionTimestamp = 5;
 * @return {number}
 */
proto.proto.PaymentInfo.prototype.getTransactiontimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setTransactiontimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearTransactiontimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasTransactiontimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MessageKey requestMessageKey = 6;
 * @return {?proto.proto.MessageKey}
 */
proto.proto.PaymentInfo.prototype.getRequestmessagekey = function() {
  return /** @type{?proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 6));
};


/**
 * @param {?proto.proto.MessageKey|undefined} value
 * @return {!proto.proto.PaymentInfo} returns this
*/
proto.proto.PaymentInfo.prototype.setRequestmessagekey = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearRequestmessagekey = function() {
  return this.setRequestmessagekey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasRequestmessagekey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 expiryTimestamp = 7;
 * @return {number}
 */
proto.proto.PaymentInfo.prototype.getExpirytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setExpirytimestamp = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearExpirytimestamp = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasExpirytimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool futureproofed = 8;
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.getFutureproofed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setFutureproofed = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearFutureproofed = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasFutureproofed = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string currency = 9;
 * @return {string}
 */
proto.proto.PaymentInfo.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearCurrency = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PAYMENT_INFO_TXNSTATUS txnStatus = 10;
 * @return {!proto.proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS}
 */
proto.proto.PaymentInfo.prototype.getTxnstatus = function() {
  return /** @type {!proto.proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} value
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.setTxnstatus = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PaymentInfo} returns this
 */
proto.proto.PaymentInfo.prototype.clearTxnstatus = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PaymentInfo.prototype.hasTxnstatus = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WebMessageInfo.repeatedFields_ = [26,28];



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
proto.proto.WebMessageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WebMessageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WebMessageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WebMessageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.proto.MessageKey.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.proto.Message.toObject(includeInstance, f),
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
    paymentinfo: (f = msg.getPaymentinfo()) && proto.proto.PaymentInfo.toObject(includeInstance, f),
    finallivelocation: (f = msg.getFinallivelocation()) && proto.proto.LiveLocationMessage.toObject(includeInstance, f),
    quotedpaymentinfo: (f = msg.getQuotedpaymentinfo()) && proto.proto.PaymentInfo.toObject(includeInstance, f),
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
 * @return {!proto.proto.WebMessageInfo}
 */
proto.proto.WebMessageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WebMessageInfo;
  return proto.proto.WebMessageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WebMessageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WebMessageInfo}
 */
proto.proto.WebMessageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.MessageKey;
      reader.readMessage(value,proto.proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.proto.Message;
      reader.readMessage(value,proto.proto.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessagetimestamp(value);
      break;
    case 4:
      var value = /** @type {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (reader.readEnum());
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
      var value = /** @type {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (reader.readEnum());
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
      var value = new proto.proto.PaymentInfo;
      reader.readMessage(value,proto.proto.PaymentInfo.deserializeBinaryFromReader);
      msg.setPaymentinfo(value);
      break;
    case 30:
      var value = new proto.proto.LiveLocationMessage;
      reader.readMessage(value,proto.proto.LiveLocationMessage.deserializeBinaryFromReader);
      msg.setFinallivelocation(value);
      break;
    case 31:
      var value = new proto.proto.PaymentInfo;
      reader.readMessage(value,proto.proto.PaymentInfo.deserializeBinaryFromReader);
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
proto.proto.WebMessageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WebMessageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WebMessageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WebMessageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (jspb.Message.getField(message, 4));
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
  f = /** @type {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (jspb.Message.getField(message, 24));
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
      proto.proto.PaymentInfo.serializeBinaryToWriter
    );
  }
  f = message.getFinallivelocation();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.proto.LiveLocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getQuotedpaymentinfo();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.proto.PaymentInfo.serializeBinaryToWriter
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
proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS = {
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
proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE = {
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
 * @return {!proto.proto.MessageKey}
 */
proto.proto.WebMessageInfo.prototype.getKey = function() {
  return /** @type{!proto.proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.proto.MessageKey, 1, 1));
};


/**
 * @param {!proto.proto.MessageKey} value
 * @return {!proto.proto.WebMessageInfo} returns this
*/
proto.proto.WebMessageInfo.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.proto.Message}
 */
proto.proto.WebMessageInfo.prototype.getMessage = function() {
  return /** @type{?proto.proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.proto.Message, 2));
};


/**
 * @param {?proto.proto.Message|undefined} value
 * @return {!proto.proto.WebMessageInfo} returns this
*/
proto.proto.WebMessageInfo.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 messageTimestamp = 3;
 * @return {number}
 */
proto.proto.WebMessageInfo.prototype.getMessagetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setMessagetimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearMessagetimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasMessagetimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WEB_MESSAGE_INFO_STATUS status = 4;
 * @return {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS}
 */
proto.proto.WebMessageInfo.prototype.getStatus = function() {
  return /** @type {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string participant = 5;
 * @return {string}
 */
proto.proto.WebMessageInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool ignore = 16;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setIgnore = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearIgnore = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasIgnore = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool starred = 17;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setStarred = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearStarred = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasStarred = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool broadcast = 18;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getBroadcast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setBroadcast = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearBroadcast = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasBroadcast = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string pushName = 19;
 * @return {string}
 */
proto.proto.WebMessageInfo.prototype.getPushname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setPushname = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearPushname = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasPushname = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * @return {!(string|Uint8Array)}
 */
proto.proto.WebMessageInfo.prototype.getMediaciphertextsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * This is a type-conversion wrapper around `getMediaciphertextsha256()`
 * @return {string}
 */
proto.proto.WebMessageInfo.prototype.getMediaciphertextsha256_asB64 = function() {
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
proto.proto.WebMessageInfo.prototype.getMediaciphertextsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediaciphertextsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setMediaciphertextsha256 = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearMediaciphertextsha256 = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasMediaciphertextsha256 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool multicast = 21;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getMulticast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setMulticast = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearMulticast = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasMulticast = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool urlText = 22;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getUrltext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setUrltext = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearUrltext = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasUrltext = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool urlNumber = 23;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getUrlnumber = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setUrlnumber = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearUrlnumber = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasUrlnumber = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional WEB_MESSAGE_INFO_STUBTYPE messageStubType = 24;
 * @return {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE}
 */
proto.proto.WebMessageInfo.prototype.getMessagestubtype = function() {
  return /** @type {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setMessagestubtype = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearMessagestubtype = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasMessagestubtype = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional bool clearMedia = 25;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getClearmedia = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setClearmedia = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearClearmedia = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasClearmedia = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * repeated string messageStubParameters = 26;
 * @return {!Array<string>}
 */
proto.proto.WebMessageInfo.prototype.getMessagestubparametersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setMessagestubparametersList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.addMessagestubparameters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearMessagestubparametersList = function() {
  return this.setMessagestubparametersList([]);
};


/**
 * optional uint32 duration = 27;
 * @return {number}
 */
proto.proto.WebMessageInfo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setDuration = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearDuration = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * repeated string labels = 28;
 * @return {!Array<string>}
 */
proto.proto.WebMessageInfo.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional PaymentInfo paymentInfo = 29;
 * @return {?proto.proto.PaymentInfo}
 */
proto.proto.WebMessageInfo.prototype.getPaymentinfo = function() {
  return /** @type{?proto.proto.PaymentInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.PaymentInfo, 29));
};


/**
 * @param {?proto.proto.PaymentInfo|undefined} value
 * @return {!proto.proto.WebMessageInfo} returns this
*/
proto.proto.WebMessageInfo.prototype.setPaymentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearPaymentinfo = function() {
  return this.setPaymentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasPaymentinfo = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional LiveLocationMessage finalLiveLocation = 30;
 * @return {?proto.proto.LiveLocationMessage}
 */
proto.proto.WebMessageInfo.prototype.getFinallivelocation = function() {
  return /** @type{?proto.proto.LiveLocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.LiveLocationMessage, 30));
};


/**
 * @param {?proto.proto.LiveLocationMessage|undefined} value
 * @return {!proto.proto.WebMessageInfo} returns this
*/
proto.proto.WebMessageInfo.prototype.setFinallivelocation = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearFinallivelocation = function() {
  return this.setFinallivelocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasFinallivelocation = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional PaymentInfo quotedPaymentInfo = 31;
 * @return {?proto.proto.PaymentInfo}
 */
proto.proto.WebMessageInfo.prototype.getQuotedpaymentinfo = function() {
  return /** @type{?proto.proto.PaymentInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.PaymentInfo, 31));
};


/**
 * @param {?proto.proto.PaymentInfo|undefined} value
 * @return {!proto.proto.WebMessageInfo} returns this
*/
proto.proto.WebMessageInfo.prototype.setQuotedpaymentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearQuotedpaymentinfo = function() {
  return this.setQuotedpaymentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasQuotedpaymentinfo = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional uint64 ephemeralStartTimestamp = 32;
 * @return {number}
 */
proto.proto.WebMessageInfo.prototype.getEphemeralstarttimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setEphemeralstarttimestamp = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearEphemeralstarttimestamp = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasEphemeralstarttimestamp = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional uint32 ephemeralDuration = 33;
 * @return {number}
 */
proto.proto.WebMessageInfo.prototype.getEphemeralduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setEphemeralduration = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearEphemeralduration = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasEphemeralduration = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional bool ephemeralOffToOn = 34;
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.getEphemeralofftoon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.setEphemeralofftoon = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.WebMessageInfo} returns this
 */
proto.proto.WebMessageInfo.prototype.clearEphemeralofftoon = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WebMessageInfo.prototype.hasEphemeralofftoon = function() {
  return jspb.Message.getField(this, 34) != null;
};


goog.object.extend(exports, proto.proto);
