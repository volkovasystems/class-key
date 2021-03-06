/*:
	@include:
		{
			"class-descriptors": "Descriptors"
		}
	@end-include

	@module-documentation:

	@end-module-documentation

	@module-configuration:
		{
			"fileName": "class-key.js",
			"moduleName": "classKey",
			"className": "Key",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true,
			"isClass": true
		}
	@end-module-configuration

	@export:
	@end-export
*/
Key = function Key( entity, key ){
	/*:
		@meta-configuration:
			{
				"entity:required": "object",
				"key:required": "string"
			}
		@end-meta-configuration

		@method-documentation:
		@end-method-documentation
	*/
	if( this instanceof Key ){
		this.initialize( entity, key );
		this.construct( );
	}else{
		return new Key( entity, key );
	}
};

Key.prototype.initialize = function initialize( entity, key ){
	/*:
		@meta-configuration:
			{
				"entity:required": "object",
				"key:required": "string"
			}
		@end-meta-configuration

		@method-documentation:
		@end-method-documentation

		@method-configuration:
			{
				"isPrivate": true
			}
		@end-method-configuration
	*/
	this.entity = entity;
	this.key = key;	
};

Key.prototype.construct = function construct( ){
	this.extractDescriptors( );
};

Key.prototype.extractDescriptors = function extractDescriptors( ){
	/*:
		@method-documentation:
		@end-method-documentation

		@method-configuration:
			{
				"isPrivate": true
			}
		@end-method-configuration
	*/
	this.descriptors = Object.getOwnPropertyDescriptor( this.entity, this.key );
};

Key.prototype.getDescriptors = function getDescriptors( ){
	this.extractDescriptors( );
	return this.descriptors;
}

Key.prototype.getValue = function getValue( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.value;
};

Key.prototype.isWritable = function isWritable( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.writable;
};

Key.prototype.isConfigurable = function isConfigurable( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.configurable;
};

Key.prototype.isEnumerable = function isEnumerable( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.enumerable;
};

Key.prototype.get = function get( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.get( );
};

Key.prototype.set = function set( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.set.apply( this.entity, arguments );
};

Key.prototype.toString = function toString( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	return this.key;
};

Key.prototype.getMappedDescriptors = function getMappedDescriptors( ){
	this.mappedDescriptors = Descriptors( this.entity, this.key );
	return this.mappedDescriptors;
};
