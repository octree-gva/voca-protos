// source: decidim.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.voca_decidim.DecidimOrganizationColorSettings');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.voca_decidim.DecidimOrganizationColorSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.voca_decidim.DecidimOrganizationColorSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.voca_decidim.DecidimOrganizationColorSettings.displayName = 'proto.voca_decidim.DecidimOrganizationColorSettings';
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
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.voca_decidim.DecidimOrganizationColorSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.voca_decidim.DecidimOrganizationColorSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.voca_decidim.DecidimOrganizationColorSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    alert: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primary: jspb.Message.getFieldWithDefault(msg, 2, ""),
    success: jspb.Message.getFieldWithDefault(msg, 3, ""),
    warning: jspb.Message.getFieldWithDefault(msg, 4, ""),
    highlight: jspb.Message.getFieldWithDefault(msg, 5, ""),
    secondary: jspb.Message.getFieldWithDefault(msg, 6, ""),
    highlightAlternative: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.voca_decidim.DecidimOrganizationColorSettings;
  return proto.voca_decidim.DecidimOrganizationColorSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.voca_decidim.DecidimOrganizationColorSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlert(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimary(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuccess(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarning(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHighlight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondary(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHighlightAlternative(value);
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
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.voca_decidim.DecidimOrganizationColorSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.voca_decidim.DecidimOrganizationColorSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.voca_decidim.DecidimOrganizationColorSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlert();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrimary();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSuccess();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWarning();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHighlight();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSecondary();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHighlightAlternative();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string alert = 1;
 * @return {string}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.getAlert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.setAlert = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string primary = 2;
 * @return {string}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.getPrimary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string success = 3;
 * @return {string}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.getSuccess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string warning = 4;
 * @return {string}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.getWarning = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.setWarning = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string highlight = 5;
 * @return {string}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.getHighlight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.setHighlight = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string secondary = 6;
 * @return {string}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.getSecondary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.setSecondary = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string highlight_alternative = 7;
 * @return {string}
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.getHighlightAlternative = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.voca_decidim.DecidimOrganizationColorSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationColorSettings.prototype.setHighlightAlternative = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


