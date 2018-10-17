/**
 * @author Orlando Leite
 *
 * util functions
 */

require('@kldit/util-clean-special-chars');

Object.defineProperty(String.prototype, 'slugify',
{
	enumerable: false,
	value: function ()
	{
		return this
			.cleanSpecialChars()
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9-]/, '-')
			.replace(/-+/, '-');
	}
});
