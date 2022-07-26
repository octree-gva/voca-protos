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

goog.provide('proto.voca_decidim.GetSettingsResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');
goog.require('proto.voca_decidim.DecidimOrganizationColorSettings');
goog.require('proto.voca_decidim.DecidimOrganizationFeatureFlagSettings');
goog.require('proto.voca_decidim.DecidimOrganizationFileUploadSettings');
goog.require('proto.voca_decidim.DecidimOrganizationLocaleSettings');
goog.require('proto.voca_decidim.DecidimOrganizationNamingSettings');
goog.require('proto.voca_decidim.DecidimOrganizationPermissionSettings');
goog.require('proto.voca_decidim.DecidimOrganizationSMTPSettings');

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
proto.voca_decidim.GetSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.voca_decidim.GetSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.voca_decidim.GetSettingsResponse.displayName = 'proto.voca_decidim.GetSettingsResponse';
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
proto.voca_decidim.GetSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.voca_decidim.GetSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.voca_decidim.GetSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.voca_decidim.GetSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    permissionSettings: (f = msg.getPermissionSettings()) && proto.voca_decidim.DecidimOrganizationPermissionSettings.toObject(includeInstance, f),
    namingSettings: (f = msg.getNamingSettings()) && proto.voca_decidim.DecidimOrganizationNamingSettings.toObject(includeInstance, f),
    localeSettings: (f = msg.getLocaleSettings()) && proto.voca_decidim.DecidimOrganizationLocaleSettings.toObject(includeInstance, f),
    smtpSettings: (f = msg.getSmtpSettings()) && proto.voca_decidim.DecidimOrganizationSMTPSettings.toObject(includeInstance, f),
    colorSettings: (f = msg.getColorSettings()) && proto.voca_decidim.DecidimOrganizationColorSettings.toObject(includeInstance, f),
    fileUploadSettings: (f = msg.getFileUploadSettings()) && proto.voca_decidim.DecidimOrganizationFileUploadSettings.toObject(includeInstance, f),
    featureSettings: (f = msg.getFeatureSettings()) && proto.voca_decidim.DecidimOrganizationFeatureFlagSettings.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.voca_decidim.GetSettingsResponse}
 */
proto.voca_decidim.GetSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.voca_decidim.GetSettingsResponse;
  return proto.voca_decidim.GetSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.voca_decidim.GetSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.voca_decidim.GetSettingsResponse}
 */
proto.voca_decidim.GetSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.voca_decidim.DecidimOrganizationPermissionSettings;
      reader.readMessage(value,proto.voca_decidim.DecidimOrganizationPermissionSettings.deserializeBinaryFromReader);
      msg.setPermissionSettings(value);
      break;
    case 3:
      var value = new proto.voca_decidim.DecidimOrganizationNamingSettings;
      reader.readMessage(value,proto.voca_decidim.DecidimOrganizationNamingSettings.deserializeBinaryFromReader);
      msg.setNamingSettings(value);
      break;
    case 4:
      var value = new proto.voca_decidim.DecidimOrganizationLocaleSettings;
      reader.readMessage(value,proto.voca_decidim.DecidimOrganizationLocaleSettings.deserializeBinaryFromReader);
      msg.setLocaleSettings(value);
      break;
    case 5:
      var value = new proto.voca_decidim.DecidimOrganizationSMTPSettings;
      reader.readMessage(value,proto.voca_decidim.DecidimOrganizationSMTPSettings.deserializeBinaryFromReader);
      msg.setSmtpSettings(value);
      break;
    case 6:
      var value = new proto.voca_decidim.DecidimOrganizationColorSettings;
      reader.readMessage(value,proto.voca_decidim.DecidimOrganizationColorSettings.deserializeBinaryFromReader);
      msg.setColorSettings(value);
      break;
    case 7:
      var value = new proto.voca_decidim.DecidimOrganizationFileUploadSettings;
      reader.readMessage(value,proto.voca_decidim.DecidimOrganizationFileUploadSettings.deserializeBinaryFromReader);
      msg.setFileUploadSettings(value);
      break;
    case 8:
      var value = new proto.voca_decidim.DecidimOrganizationFeatureFlagSettings;
      reader.readMessage(value,proto.voca_decidim.DecidimOrganizationFeatureFlagSettings.deserializeBinaryFromReader);
      msg.setFeatureSettings(value);
      break;
    case 9:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
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
proto.voca_decidim.GetSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.voca_decidim.GetSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.voca_decidim.GetSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.voca_decidim.GetSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPermissionSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.voca_decidim.DecidimOrganizationPermissionSettings.serializeBinaryToWriter
    );
  }
  f = message.getNamingSettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.voca_decidim.DecidimOrganizationNamingSettings.serializeBinaryToWriter
    );
  }
  f = message.getLocaleSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.voca_decidim.DecidimOrganizationLocaleSettings.serializeBinaryToWriter
    );
  }
  f = message.getSmtpSettings();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.voca_decidim.DecidimOrganizationSMTPSettings.serializeBinaryToWriter
    );
  }
  f = message.getColorSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.voca_decidim.DecidimOrganizationColorSettings.serializeBinaryToWriter
    );
  }
  f = message.getFileUploadSettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.voca_decidim.DecidimOrganizationFileUploadSettings.serializeBinaryToWriter
    );
  }
  f = message.getFeatureSettings();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.voca_decidim.DecidimOrganizationFeatureFlagSettings.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DecidimOrganizationPermissionSettings permission_settings = 2;
 * @return {?proto.voca_decidim.DecidimOrganizationPermissionSettings}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getPermissionSettings = function() {
  return /** @type{?proto.voca_decidim.DecidimOrganizationPermissionSettings} */ (
    jspb.Message.getWrapperField(this, proto.voca_decidim.DecidimOrganizationPermissionSettings, 2));
};


/**
 * @param {?proto.voca_decidim.DecidimOrganizationPermissionSettings|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setPermissionSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearPermissionSettings = function() {
  return this.setPermissionSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasPermissionSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DecidimOrganizationNamingSettings naming_settings = 3;
 * @return {?proto.voca_decidim.DecidimOrganizationNamingSettings}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getNamingSettings = function() {
  return /** @type{?proto.voca_decidim.DecidimOrganizationNamingSettings} */ (
    jspb.Message.getWrapperField(this, proto.voca_decidim.DecidimOrganizationNamingSettings, 3));
};


/**
 * @param {?proto.voca_decidim.DecidimOrganizationNamingSettings|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setNamingSettings = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearNamingSettings = function() {
  return this.setNamingSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasNamingSettings = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DecidimOrganizationLocaleSettings locale_settings = 4;
 * @return {?proto.voca_decidim.DecidimOrganizationLocaleSettings}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getLocaleSettings = function() {
  return /** @type{?proto.voca_decidim.DecidimOrganizationLocaleSettings} */ (
    jspb.Message.getWrapperField(this, proto.voca_decidim.DecidimOrganizationLocaleSettings, 4));
};


/**
 * @param {?proto.voca_decidim.DecidimOrganizationLocaleSettings|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setLocaleSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearLocaleSettings = function() {
  return this.setLocaleSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasLocaleSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DecidimOrganizationSMTPSettings smtp_settings = 5;
 * @return {?proto.voca_decidim.DecidimOrganizationSMTPSettings}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getSmtpSettings = function() {
  return /** @type{?proto.voca_decidim.DecidimOrganizationSMTPSettings} */ (
    jspb.Message.getWrapperField(this, proto.voca_decidim.DecidimOrganizationSMTPSettings, 5));
};


/**
 * @param {?proto.voca_decidim.DecidimOrganizationSMTPSettings|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setSmtpSettings = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearSmtpSettings = function() {
  return this.setSmtpSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasSmtpSettings = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DecidimOrganizationColorSettings color_settings = 6;
 * @return {?proto.voca_decidim.DecidimOrganizationColorSettings}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getColorSettings = function() {
  return /** @type{?proto.voca_decidim.DecidimOrganizationColorSettings} */ (
    jspb.Message.getWrapperField(this, proto.voca_decidim.DecidimOrganizationColorSettings, 6));
};


/**
 * @param {?proto.voca_decidim.DecidimOrganizationColorSettings|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setColorSettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearColorSettings = function() {
  return this.setColorSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasColorSettings = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DecidimOrganizationFileUploadSettings file_upload_settings = 7;
 * @return {?proto.voca_decidim.DecidimOrganizationFileUploadSettings}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getFileUploadSettings = function() {
  return /** @type{?proto.voca_decidim.DecidimOrganizationFileUploadSettings} */ (
    jspb.Message.getWrapperField(this, proto.voca_decidim.DecidimOrganizationFileUploadSettings, 7));
};


/**
 * @param {?proto.voca_decidim.DecidimOrganizationFileUploadSettings|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setFileUploadSettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearFileUploadSettings = function() {
  return this.setFileUploadSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasFileUploadSettings = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DecidimOrganizationFeatureFlagSettings feature_settings = 8;
 * @return {?proto.voca_decidim.DecidimOrganizationFeatureFlagSettings}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getFeatureSettings = function() {
  return /** @type{?proto.voca_decidim.DecidimOrganizationFeatureFlagSettings} */ (
    jspb.Message.getWrapperField(this, proto.voca_decidim.DecidimOrganizationFeatureFlagSettings, 8));
};


/**
 * @param {?proto.voca_decidim.DecidimOrganizationFeatureFlagSettings|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setFeatureSettings = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearFeatureSettings = function() {
  return this.setFeatureSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasFeatureSettings = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.voca_decidim.GetSettingsResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
*/
proto.voca_decidim.GetSettingsResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.voca_decidim.GetSettingsResponse} returns this
 */
proto.voca_decidim.GetSettingsResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.GetSettingsResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


