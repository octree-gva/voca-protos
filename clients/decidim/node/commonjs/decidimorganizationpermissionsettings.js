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

goog.provide('proto.voca_decidim.DecidimOrganizationPermissionSettings');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.voca_decidim.SETTINGS_REGISTER_MODE_OPTION');
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
proto.voca_decidim.DecidimOrganizationPermissionSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.voca_decidim.DecidimOrganizationPermissionSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.voca_decidim.DecidimOrganizationPermissionSettings.displayName = 'proto.voca_decidim.DecidimOrganizationPermissionSettings';
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
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.voca_decidim.DecidimOrganizationPermissionSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.voca_decidim.DecidimOrganizationPermissionSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    forceUsersToAuthenticateBeforeAccessOrganization: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    usersRegistrationMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.voca_decidim.DecidimOrganizationPermissionSettings}
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.voca_decidim.DecidimOrganizationPermissionSettings;
  return proto.voca_decidim.DecidimOrganizationPermissionSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.voca_decidim.DecidimOrganizationPermissionSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.voca_decidim.DecidimOrganizationPermissionSettings}
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceUsersToAuthenticateBeforeAccessOrganization(value);
      break;
    case 2:
      var value = /** @type {!proto.voca_decidim.SETTINGS_REGISTER_MODE_OPTION} */ (reader.readEnum());
      msg.setUsersRegistrationMode(value);
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
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.voca_decidim.DecidimOrganizationPermissionSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.voca_decidim.DecidimOrganizationPermissionSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUsersRegistrationMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional bool force_users_to_authenticate_before_access_organization = 1;
 * @return {boolean}
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.getForceUsersToAuthenticateBeforeAccessOrganization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.voca_decidim.DecidimOrganizationPermissionSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.setForceUsersToAuthenticateBeforeAccessOrganization = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.voca_decidim.DecidimOrganizationPermissionSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.clearForceUsersToAuthenticateBeforeAccessOrganization = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.hasForceUsersToAuthenticateBeforeAccessOrganization = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SETTINGS_REGISTER_MODE_OPTION users_registration_mode = 2;
 * @return {!proto.voca_decidim.SETTINGS_REGISTER_MODE_OPTION}
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.getUsersRegistrationMode = function() {
  return /** @type {!proto.voca_decidim.SETTINGS_REGISTER_MODE_OPTION} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.voca_decidim.SETTINGS_REGISTER_MODE_OPTION} value
 * @return {!proto.voca_decidim.DecidimOrganizationPermissionSettings} returns this
 */
proto.voca_decidim.DecidimOrganizationPermissionSettings.prototype.setUsersRegistrationMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};

